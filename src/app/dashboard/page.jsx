'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DashboardSidebar from '../../components/DashboardSidebar'
import ProfileSection from '../../components/dashboard/ProfileSection'
import OrdersSection from '../../components/dashboard/OrdersSection'
import WishlistSection from '../../components/dashboard/WishlistSection'
import SettingsSection from '../../components/dashboard/SettingsSection'
import CartSection from '../../components/dashboard/CartSection'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('profile')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const section = urlParams.get('section')
    if (section && ['profile', 'orders', 'wishlist', 'settings', 'cart'].includes(section)) {
      setActiveSection(section)
    }
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />
      case 'orders':
        return <OrdersSection />
      case 'wishlist':
        return <WishlistSection />
      case 'settings':
        return <SettingsSection />
      case 'cart':
        return <CartSection />
      default:
        return <ProfileSection />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <DashboardSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          
          <div className="flex-1">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
            >
              {renderSection()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}