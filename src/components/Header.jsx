'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

export default function Header() {
  const cartItemsCount = useSelector(state => state.cart.totalQuantity)
  const wishlistItemsCount = useSelector(state => state.wishlist.items.length)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ rotateY: 10, scale: 1.05 }}
            whileTap={{ rotateY: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="text-2xl font-bold text-cyan-600 block">
              <span className="text-black">Deen</span> Fashion
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Shop', 'Dashboard'].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, rotateX: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <motion.div
              whileHover={{ rotateZ: 10, scale: 1.1 }}
              whileTap={{ rotateZ: -10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/dashboard?section=wishlist" className="relative p-2 text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistItemsCount > 0 && (
                  <span className="absolute top-[20px] left-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItemsCount}
                  </span>
                )}
              </Link>
            </motion.div>

            {/* Cart */}
            <motion.div
              whileHover={{ rotateZ: -10, scale: 1.1 }}
              whileTap={{ rotateZ: 10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/dashboard?section=cart" className="relative p-2 text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute top-[20px] left-4 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </motion.div>

            {/* Profile */}
            <motion.div
              whileHover={{ rotateY: 15, scale: 1.1 }}
              whileTap={{ rotateY: -15, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/dashboard" className="p-2 text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}
