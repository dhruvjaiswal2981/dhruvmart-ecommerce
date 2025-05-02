import { useCart } from '../../context/CartContext'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const CartItem = ({ item, isMini = false }) => {
  const { removeFromCart, updateQuantity } = useCart()
  const [isRemoving, setIsRemoving] = useState(false)
  const [currentQuantity, setCurrentQuantity] = useState(item.quantity)

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => removeFromCart(item.id), 300)
  }

  const handleQuantityChange = (newQuantity) => {
    const validatedQuantity = Math.max(1, Math.min(99, newQuantity))
    setCurrentQuantity(validatedQuantity)
    updateQuantity(item.id, validatedQuantity)
  }

  const handleQuantityBlur = () => {
    if (currentQuantity < 1) {
      handleRemove()
    }
  }

  return (
    <div className={`group flex items-start p-4 ${isMini ? 'border-b border-gray-100' : 'bg-white rounded-lg shadow-sm hover:shadow-md'} transition-all duration-300 ${isRemoving ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Product Image */}
      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
        {item.discountPercentage && (
          <span className="absolute top-1 left-1 bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            -{item.discountPercentage}%
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-start">
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-gray-900 line-clamp-1 hover:text-indigo-600 transition-colors">
              {item.title}
            </h4>
            
            {/* Rating (only for full cart view) */}
            {!isMini && item.rating && (
              <div className="flex items-center mt-1">
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.round(item.rating.rate)
                          ? 'text-amber-400'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400">
                  ({item.rating.count})
                </span>
              </div>
            )}
            
            <div className="mt-1.5 flex items-baseline">
              <p className="text-indigo-600 font-bold">
                ${item.price.toFixed(2)}
              </p>
              {item.originalPrice && (
                <span className="text-xs text-gray-400 line-through ml-2">
                  ${item.originalPrice.toFixed(2)}
                </span>
              )}
              {!isMini && (
                <span className="ml-auto text-sm font-medium text-gray-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              )}
            </div>
          </div>
          
          {/* Remove button (positioned absolutely for mini cart) */}
          {isMini ? (
            <button
              onClick={handleRemove}
              className="text-gray-400 hover:text-red-500 transition-colors ml-2"
              aria-label="Remove item"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleRemove}
              className="text-gray-400 hover:text-red-500 transition-colors p-1 ml-2"
              aria-label="Remove item"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Quantity Controls */}
        {!isMini ? (
          <div className="flex items-center mt-3 gap-4">
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <button
                onClick={() => handleQuantityChange(item.quantity - 1)}
                className="hover:bg-gray-100 text-gray-600 px-3 py-1.5 transition-all active:bg-gray-200"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                max="99"
                value={currentQuantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                onBlur={handleQuantityBlur}
                className="w-12 px-0 py-1.5 text-center border-x border-gray-200 bg-white font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                onClick={() => handleQuantityChange(item.quantity + 1)}
                className="hover:bg-gray-100 text-gray-600 px-3 py-1.5 transition-all active:bg-gray-200"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            
            <button
              onClick={handleRemove}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1"
            >
              <XMarkIcon className="h-4 w-4" />
              Remove
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
            <span className="text-sm font-medium text-gray-700">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartItem