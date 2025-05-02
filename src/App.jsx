import { useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CollectionsPage from './pages/CollectionsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

// Create DarkMode context
const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for user preference or use system preference
    const savedPreference = localStorage.getItem('darkMode')
    if (savedPreference !== null) {
      return JSON.parse(savedPreference)
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)

function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <BrowserRouter>
          <DarkModeToggle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </DarkModeProvider>
  )
}

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all dark:bg-indigo-800 dark:hover:bg-indigo-900"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-indigo-900 mb-4 dark:text-indigo-300">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 text-center dark:text-gray-300">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link 
        to="/" 
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all dark:bg-indigo-700 dark:hover:bg-indigo-800"
      >
        Return to Homepage
      </Link>
    </div>
  )
}

export default App