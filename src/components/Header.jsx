import { ShoppingBagIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MiniCart from './Cart/MiniCart'

const Header = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setIsMobileMenuOpen(false)
    }
  }

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-indigo-900 text-white text-center py-2 px-4 text-sm">
        Free shipping on orders over ₹5000 | Use code <span className="font-bold">WELCOME10</span> for 10% off
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-indigo-700 hover:text-indigo-800 transition-all flex items-center"
            >
              <span className="bg-indigo-100 text-indigo-700 rounded-lg px-2 py-1 mr-2">D</span>
              <span className="hidden sm:inline">hruvMart</span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="text-gray-700 hover:text-indigo-600 transition-all font-medium relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Search and cart */}
            <div className="flex items-center space-x-4">
              {/* Search (desktop) */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="border border-gray-300 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-48 lg:w-64 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="absolute left-3 top-2.5 text-gray-400 hover:text-indigo-600">
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </button>
                </div>
              </form>

              {/* Cart */}
              <button
                className="relative p-2 text-gray-700 hover:text-indigo-600 transition-all group"
                onClick={() => {
                  setIsCartOpen(!isCartOpen)
                  setIsMobileMenuOpen(false)
                }}
              >
                <ShoppingBagIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {cartCount}
                  </span>
                )}
              </button>
              {isCartOpen && <MiniCart />}
            </div>
          </div>

          {/* Mobile search (always visible) */}
          <form onSubmit={handleSearch} className="mt-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute left-3 top-2.5 text-gray-400 hover:text-indigo-600">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <ul className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-2 px-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <div className="flex items-center py-2 px-3 text-gray-700">
                  <span className="mr-2">Need help?</span>
                  <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
                    Call us
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}

export default Header