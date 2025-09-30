'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

export default function CartFloatingBtn() {
  const cartItemsCount = useSelector(state => state.cart.totalQuantity)
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowScrollBtn(true)
      else setShowScrollBtn(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (cartItemsCount === 0 || !showScrollBtn) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="/dashboard?section=cart"
        className="relative flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItemsCount}
        </span>
      </Link>
    </motion.div>
  )
}
