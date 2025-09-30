# Deen Fashion - Premium Islamic Clothing E-Commerce

A modern, responsive e-commerce platform built with Next.js, featuring premium Islamic and modest clothing from Bangladesh.

![Deen Fashion](https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=Deen+Fashion+-+Premium+Islamic+Clothing)

## 🚀 Features

### 🛍️ E-Commerce Features
- **Product Catalog** - Browse through various categories (T-Shirts, Polo, Hoodies, etc.)
- **Advanced Filtering** - Filter by category, size, color, and price range
- **Product Search** - Real-time search functionality
- **Shopping Cart** - Add, remove, and manage cart items
- **Wishlist** - Save favorite products for later
- **Product Reviews** - Customer rating and review system

### 👤 User Dashboard
- **Profile Management** - Update personal information
- **Order History** - Track previous orders
- **Wishlist Management** - Manage saved products
- **Shopping Cart** - Review and modify cart items
- **Settings** - Customize theme, notifications, and preferences

### 🎨 Modern UI/UX
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Smooth Animations** - Powered by Framer Motion
- **Dark/Light Theme** - User preference-based theming
- **Professional Design** - Clean, modern interface with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Framer Motion** - Animations
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **Redux Toolkit** - Predictable state container
- **Redux Persist** - State persistence
- **LocalStorage** - Client-side data storage

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/deen-fashion.git
   cd deen-fashion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
deen-fashion/
├── app/                   # Next.js 15 App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── Providers.js       # Redux provider
│   ├── shop/
│   │   └── page.js        # Shop page
│   ├── product/
│   │   └── [id]/
│   │       └── page.js    # Product detail page
│   └── dashboard/
│       └── page.js        # User dashboard
├── components/            # Reusable components
│   ├── Header.js          # Navigation header
│   ├── Footer.js          # Site footer
│   ├── ProductCard.js     # Product display card
│   ├── Filters.js         # Product filters
│   ├── DashboardSidebar.js # Dashboard navigation
│   └── dashboard/         # Dashboard components
│       ├── ProfileSection.js
│       ├── OrdersSection.js
│       ├── WishlistSection.js
│       ├── SettingsSection.js
│       └── CartSection.js
├── store/                 # Redux store configuration
│   ├── index.js          # Store setup
│   ├── cartSlice.js      # Cart state management
│   └── wishlistSlice.js  # Wishlist state management
├── data/                 # Static data
│   └── products.js       # Product data
├── public/               # Static assets
└── package.json
```

## 🎯 Key Pages

### Home Page (`/`)
- Hero section with call-to-action
- Featured products showcase
- Best sellers display
- Company value propositions

### Shop Page (`/shop`)
- Product grid with filtering
- Search functionality
- Category-based navigation
- Price range filtering

### Product Detail (`/product/[id]`)
- Product image gallery
- Size selection
- Add to cart functionality
- Product specifications
- Related products

### User Dashboard (`/dashboard`)
- **Profile** - Personal information management
- **Orders** - Order history and tracking
- **Cart** - Shopping cart management
- **Wishlist** - Saved products
- **Settings** - User preferences

## 🔧 State Management

### Redux Store Structure
```javascript
{
  cart: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  wishlist: {
    items: []
  }
}
```

### Key Actions
- `addToCart` - Add product to cart
- `removeFromCart` - Remove product from cart
- `updateQuantity` - Update cart item quantity
- `addToWishlist` - Add product to wishlist
- `removeFromWishlist` - Remove product from wishlist

## 🎨 Styling & Design

### Design System
- **Colors**: Blue primary palette with neutral grays
- **Typography**: Inter font family
- **Spacing**: 8px base unit system
- **Border Radius**: Consistent rounded corners

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📱 Responsive Features

- Mobile-first design approach
- Hamburger menu for mobile navigation
- Touch-friendly interface elements
- Optimized images and loading states

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use meaningful component and variable names
- Write responsive, mobile-first CSS
- Test across different browsers and devices

## 🐛 Troubleshooting

### Common Issues

1. **Redux not working**
   - Ensure `Providers` wrapper is in layout
   - Check store configuration
   - Verify Redux DevTools extension

2. **Styling issues**
   - Clear browser cache
   - Restart development server
   - Check Tailwind CSS configuration

3. **Build errors**
   - Update dependencies
   - Check for TypeScript errors
   - Verify environment variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Lead Developer** - [Your Name]
- **UI/UX Designer** - [Designer Name]
- **Project Manager** - [PM Name]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Redux Toolkit](https://redux-toolkit.js.org/) for simplified state management
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

**Deen Fashion** - Elevating modest fashion with premium quality and modern design. Built with ❤️ for the Muslim community.

For questions or support, please open an issue or contact us at support@deenfashion.com.