import { User, ShoppingCart, Heart, Settings, Box } from "lucide-react"

export default function DashboardSidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: 'profile', label: 'Profile', icon: <User /> },
    { id: 'orders', label: 'My Orders', icon: <Box /> },
    { id: 'cart', label: 'Shopping Cart', icon: <ShoppingCart /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart /> },
    // { id: 'settings', label: 'Settings', icon: <Settings /> },
  ]

  return (
    <div className="lg:w-80 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 h-fit">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}