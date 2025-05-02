import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'

const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default ProductPage