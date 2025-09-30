'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const wishlistItems = useSelector(state => state.wishlist.items)
  const isInWishlist = wishlistItems.some(item => item.id === product.id)

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size: 'M', // Default size
      quantity: 1
    }))
  }

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id))
    } else {
      dispatch(addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        description: product.description
      }))
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white border border-gray-200 rounded-2xl p-4 card-hover group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square bg-gray-50 rounded-xl p-4 mb-4 relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">৳ {product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">৳ {product.originalPrice}</span>
            )}
          </div>
          
          {product.originalPrice && (
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
              Save ৳ {product.originalPrice - product.price}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>⭐ 4.8 (42)</span>
          <span>{product.stock} in stock</span>
        </div>
        
        <div className="flex gap-2 mt-2">
          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
          <button 
            onClick={handleWishlistToggle}
            className={`p-2 border rounded-lg transition-colors ${
              isInWishlist 
                ? 'border-red-500 bg-red-50 text-red-600' 
                : 'border-gray-300 hover:border-gray-400 text-gray-600'
            }`}
          >
            <svg className="w-5 h-5" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )
}