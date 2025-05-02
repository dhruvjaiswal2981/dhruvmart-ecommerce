import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const MiniCart = () => {
  const { cart, subtotal, isCartOpen, setIsCartOpen } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 ${isCartOpen ? 'block' : 'hidden'} md:block md:relative md:inset-auto`}
    >
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="absolute right-0 top-0 md:top-12 w-full md:w-96 bg-white shadow-2xl rounded-lg overflow-hidden z-50 transform transition-all duration-300 ease-out">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Your Cart ({cart.length})
          </h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Empty State */}
        {cart.length === 0 ? (
          <div className="p-8 text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-gray-500 mb-6">Your shopping cart is empty</p>
            <Link
              to="/products"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all w-full max-w-xs shadow-sm"
              onClick={() => setIsCartOpen(false)}
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="max-h-[60vh] overflow-y-auto divide-y divide-gray-100">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} isMini />
              ))}
            </div>

            {/* Summary */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-bold text-lg text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col gap-3">
                <Link
                  to="/cart"
                  className="bg-indigo-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-indigo-700 transition-all shadow-sm flex items-center justify-center gap-2"
                  onClick={() => setIsCartOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  View Full Cart
                </Link>
                
                <button
                  className="bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Proceed to Checkout
                </button>
              </div>

              {/* Continue shopping link */}
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium w-full text-center transition-colors"
              >
                Continue Shopping →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default MiniCart