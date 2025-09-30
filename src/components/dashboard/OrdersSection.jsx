'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../store/cartSlice'
import Link from 'next/link'

export default function OrdersSection() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const [orders, setOrders] = useState([])
  const [isCreatingOrder, setIsCreatingOrder] = useState(false)

  // Load orders from localStorage on component mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('userOrders')
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    }
  }, [])

  // Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem('userOrders', JSON.stringify(orders))
  }, [orders])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800 border border-green-200'
      case 'Shipped': return 'bg-blue-100 text-blue-800 border border-blue-200'
      case 'Processing': return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
      case 'Cancelled': return 'bg-red-100 text-red-800 border border-red-200'
      default: return 'bg-gray-100 text-gray-800 border border-gray-200'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return '✅'
      case 'Shipped': return '🚚'
      case 'Processing': return '⏳'
      case 'Cancelled': return '❌'
      default: return '📦'
    }
  }

  const createOrderFromCart = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty! Add some items to create an order.')
      return
    }

    setIsCreatingOrder(true)

    // Simulate API call delay
    setTimeout(() => {
      const newOrder = {
        id: `ORD-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        items: cartItems.reduce((total, item) => total + item.quantity, 0),
        total: cartItems.reduce((total, item) => total + item.totalPrice, 0) + 60, // Including shipping
        status: 'Processing',
        products: cartItems.map(item => `${item.title} (${item.size})`),
        itemsDetails: cartItems.map(item => ({
          id: item.id,
          title: item.title,
          size: item.size,
          quantity: item.quantity,
          price: item.price,
          image: item.image
        })),
        shippingAddress: 'Dhaka, Bangladesh',
        paymentMethod: 'Cash on Delivery',
        trackingNumber: `TRK${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      }

      setOrders(prev => [newOrder, ...prev])
      dispatch(clearCart()) // Clear cart after order creation
      setIsCreatingOrder(false)
      
      alert(`Order ${newOrder.id} created successfully!`)
    }, 1500)
  }

  const cancelOrder = (orderId) => {
    if (confirm('Are you sure you want to cancel this order?')) {
      setOrders(prev => prev.map(order => 
        order.id === orderId ? { ...order, status: 'Cancelled' } : order
      ))
    }
  }

  const simulateOrderProgress = (orderId) => {
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        const statusFlow = ['Processing', 'Shipped', 'Delivered']
        const currentIndex = statusFlow.indexOf(order.status)
        const nextStatus = statusFlow[currentIndex + 1] || order.status
        
        if (nextStatus !== order.status) {
          return { ...order, status: nextStatus }
        }
      }
      return order
    }))
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getOrderProgress = (status) => {
    const steps = [
      { name: 'Processing', completed: true },
      { name: 'Shipped', completed: ['Shipped', 'Delivered'].includes(status) },
      { name: 'Delivered', completed: status === 'Delivered' }
    ]
    return steps
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">My Orders</h2>
          <p className="text-gray-600 mt-1">Track and manage your orders</p>
        </div>
        
        {cartItems.length > 0 && (
          <button
            onClick={createOrderFromCart}
            disabled={isCreatingOrder}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreatingOrder ? 'Creating Order...' : `Create Order (${cartItems.length} items)`}
          </button>
        )}
      </div>

      {/* Order Statistics */}
      {orders.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{orders.length}</div>
            <div className="text-sm text-gray-600">Total Orders</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {orders.filter(o => o.status === 'Delivered').length}
            </div>
            <div className="text-sm text-gray-600">Delivered</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {orders.filter(o => o.status === 'Processing').length}
            </div>
            <div className="text-sm text-gray-600">Processing</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {orders.filter(o => o.status === 'Shipped').length}
            </div>
            <div className="text-sm text-gray-600">Shipped</div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
          >
            {/* Order Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{getStatusIcon(order.status)}</div>
                <div>
                  <h3 className="font-semibold text-lg">{order.id}</h3>
                  <p className="text-gray-600 text-sm">Ordered on {formatDate(order.date)}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
                {order.status === 'Processing' && (
                  <button
                    onClick={() => cancelOrder(order.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* Order Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                {getOrderProgress(order.status).map((step, index) => (
                  <div key={step.name} className="flex flex-col items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.completed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.completed ? '✓' : index + 1}
                    </div>
                    <span className="text-xs mt-1 text-gray-600">{step.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex">
                {getOrderProgress(order.status).map((step, index, array) => (
                  <div key={index} className="flex-1 h-1 bg-gray-200 relative">
                    {index < array.length - 1 && (
                      <div className={`absolute top-0 left-0 h-1 w-full ${
                        step.completed ? 'bg-green-500' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Items:</h4>
              <div className="space-y-2">
                {order.itemsDetails.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-gray-600">Size: {item.size} • Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">৳ {item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Footer */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  Tracking: <span className="font-mono">{order.trackingNumber}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Payment: {order.paymentMethod}
                </p>
              </div>
              
              <div className="text-right">
                <p className="text-lg font-bold">৳ {order.total}</p>
                <p className="text-sm text-gray-600">{order.items} item{order.items > 1 ? 's' : ''}</p>
                <div className="flex gap-2 mt-2">
                  <button 
                    onClick={() => simulateOrderProgress(order.id)}
                    disabled={order.status === 'Delivered' || order.status === 'Cancelled'}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium disabled:opacity-50"
                  >
                    Simulate Progress
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
          <p className="text-gray-600 mb-4">Start shopping and create your first order</p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/shop"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
            {cartItems.length > 0 && (
              <button
                onClick={createOrderFromCart}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Create Order from Cart ({cartItems.length} items)
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}