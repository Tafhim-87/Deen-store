'use client'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../../store/wishlistSlice'
import { addToCart } from '../../store/cartSlice'
import Link from 'next/link'

export default function WishlistSection() {
  const dispatch = useDispatch()
  const wishlistItems = useSelector(state => state.wishlist.items)

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId))
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: 'M',
      quantity: 1
    }))
  }

  const handleMoveAllToCart = () => {
    wishlistItems.forEach(product => {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: 'M',
        quantity: 1
      }))
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Wishlist</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">{wishlistItems.length} items</span>
          {wishlistItems.length > 0 && (
            <button
              onClick={handleMoveAllToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Add All to Cart
            </button>
          )}
        </div>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-4 card-hover group"
            >
              <Link href={`/product/${product.id}`}>
                <div className="aspect-square bg-gray-50 rounded-xl p-4 mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
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
                  <span className="text-lg font-bold text-gray-900">৳ {product.price}</span>
                </div>
                
                <div className="flex gap-2 mt-2">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    className="p-2 border border-red-500 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">❤️</div>
          <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-4">Save your favorite items here</p>
          <Link 
            href="/shop"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Products
          </Link>
        </div>
      )}
    </div>
  )
}