'use client'
import { motion } from 'framer-motion'

export default function Filters({ filters, setFilters }) {
  const categories = ['T-Shirt', 'Polo', 'Hoodie', 'Sweatshirt']
  const sizes = ['S', 'M', 'L', 'XL', 'XXL']
  const colors = ['Black', 'White', 'Blue', 'Gray', 'Navy']

  const updateFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }))
  }

  const updatePriceRange = (index, value) => {
    const newRange = [...filters.priceRange]
    newRange[index] = parseInt(value)
    setFilters(prev => ({ ...prev, priceRange: newRange }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => updateFilter('category', category)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-semibold mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => updateFilter('size', size)}
              className={`px-3 py-2 border rounded-lg transition-all ${
                filters.size.includes(size)
                  ? 'border-blue-500 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold mb-3">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => updateFilter('color', color)}
              className={`px-3 py-2 border rounded-lg transition-all ${
                filters.color.includes(color)
                  ? 'border-blue-500 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="block text-xs text-gray-600 mb-1">Min</label>
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => updatePriceRange(0, e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                min="0"
                max="2000"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-600 mb-1">Max</label>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => updatePriceRange(1, e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                min="0"
                max="2000"
              />
            </div>
          </div>
          <div className="text-center text-sm text-gray-600">
            ৳ {filters.priceRange[0]} - ৳ {filters.priceRange[1]}
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => setFilters({
          category: [],
          size: [],
          priceRange: [0, 2000],
          color: []
        })}
        className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:border-gray-400 transition-colors"
      >
        Clear All Filters
      </button>
    </motion.div>
  )
}