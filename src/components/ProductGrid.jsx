import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const ProductGrid = ({ products: initialProducts }) => {
  const [products, setProducts] = useState(initialProducts || [])
  const [loading, setLoading] = useState(!initialProducts)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('default')

  useEffect(() => {
    if (!initialProducts) {
      const fetchProducts = async () => {
        try {
          setLoading(true)
          const response = await axios.get('https://fakestoreapi.com/products')
          setProducts(response.data)
          setLoading(false)
        } catch (err) {
          setError(err.message)
          setLoading(false)
        }
      }
      fetchProducts()
    }
  }, [initialProducts])

  useEffect(() => {
    let filteredProducts = initialProducts || products

    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (sortOption === 'price-low') {
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
    } else if (sortOption === 'price-high') {
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
    } else if (sortOption === 'rating') {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.rating.rate - a.rating.rate
      )
    }

    setProducts(filteredProducts)
  }, [searchTerm, sortOption, initialProducts])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading products: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-all"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl font-serif font-bold text-dark">
          {initialProducts ? 'Featured Products' : 'All Products'}
        </h2>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
          </div>
          <select
            className="border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default Sorting</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGrid