'use client'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { removeFromCart, updateQuantity, clearCart } from '../../store/cartSlice'
import Link from 'next/link'
import { useState } from 'react'

export default function CartSection() {
  const dispatch = useDispatch()
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart)
  const [isCheckedOut, setIsCheckedOut] = useState(false)

  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity < 1) return
    dispatch(updateQuantity({ id, size, quantity: newQuantity }))
  }

  const handleRemoveItem = (id, size) => {
    dispatch(removeFromCart({ id, size }))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleCheckout = () => {
  // Clear redux cart & wishlist
  dispatch(clearCart());
  dispatch({ type: "wishlist/clearWishlist" }); // or directly dispatch(clearWishlist())

  // Clear persisted redux state from localStorage
  localStorage.removeItem("reduxState");

  setIsCheckedOut(true);
};



  if (items.length === 0 && !isCheckedOut) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🛒</div>
        <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
        <p className="text-gray-600 mb-4">Add some products to your cart</p>
        <Link 
          href="/shop"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    )
  }

  if (isCheckedOut) {
    return (
      <div className="text-center py-12">
        <div className="text-green-600 text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-semibold mb-4">Thank you for your purchase!</h3>
        <p className="text-gray-600 mb-6">Your order has been successfully placed.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/shop"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">{totalQuantity} items</span>
          <button
            onClick={handleClearCart}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={`${item.id}-${item.size}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            
            <div className="flex-1 ">
              <h3 className="font-semibold">{item.title}</h3>
              <div className='flex justify-between items-center md:block'>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
              <p className="text-lg font-bold text-blue-600">৳ {item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                  className="px-3 py-1 text-gray-600 hover:text-gray-800"
                >
                  -
                </button>
                <span className="px-3 py-1 border-x border-gray-300 min-w-12 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>

              <div className="text-right min-w-20">
                <p className="font-semibold">৳ {item.totalPrice}</p>
              </div>

              <button
                onClick={() => handleRemoveItem(item.id, item.size)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">৳ {totalAmount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold">৳ 60</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-3">
            <span>Total</span>
            <span>৳ {totalAmount + 60}</span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
          <Link 
            href="/shop"
            className="block text-center border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}