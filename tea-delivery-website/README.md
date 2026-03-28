# 🍵 TeaDelivery - Premium Tea Delivery Website

A modern, fully-featured tea delivery e-commerce website built with React. Featuring a beautiful UI, shopping cart functionality, and a complete ordering system.

## Features

### 🏠 Homepage
- **Hero Section** - Eye-catching introduction with call-to-action
- **Features Section** - Highlights of the service (Fast Delivery, Premium Quality, Global Selection, Fresh & Natural)
- **Tea Categories** - Browse different types of tea (Green, Black, Oolong, White, Herbal, Specialty)
- **Customer Testimonials** - Real customer reviews and ratings

### 🛍️ Product Catalog
- **8 Premium Tea Products** including:
  - Green Tea Jasmine
  - Black Tea Assam
  - Oolong Dragon Well
  - White Tea Silver Needle
  - Herbal Chamomile
  - Pu-erh Tea Aged
  - Matcha Green
  - Mint Infusion
- Detailed product information with descriptions and prices
- Interactive "Add to Cart" buttons

### 🛒 Shopping Cart
- Real-time cart updates
- Add/remove items functionality
- Quantity adjustment controls
- Order summary with subtotal and total
- **Free shipping** on all orders

### 📦 Checkout System
- Delivery information form
  - Full name
  - Email address
  - Delivery address
  - Phone number
- Order confirmation
- Calculation history for all operations

### 🎨 Design Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Green Tea Theme** - Natural tea-inspired color palette
- **Smooth Animations** - Hover effects and transitions
- **Modern UI Components** - Professional buttons, cards, and modals
- **Dark Mode Cart** - Elegant sidebar shopping cart

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd tea-delivery-website
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:
```bash
npm build
```

## File Structure

```
tea-delivery-website/
├── TeaDeliveryApp.jsx      # Main React component
├── TeaDeliveryApp.css      # Styling
├── package.json            # Project dependencies
├── index.js                # Entry point
├── index.html              # HTML template
└── README.md               # This file
```

## Features in Detail

### Navigation
- Sticky navbar with logo and navigation links
- Real-time cart item counter
- Active page indicator

### Shopping Experience
- Browse all products on the Shop page
- View product details (name, category, price, description)
- Add items to cart from product cards
- Adjust quantities in the cart
- Remove items from cart

### Checkout
- User-friendly checkout form
- Beautiful order summary
- Confirmation message upon successful order

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly buttons and controls

## Product Information

Each tea product includes:
- **Category** - Tea type (Green, Black, etc.)
- **Price** - Clearly displayed
- **Description** - Product details
- **Emoji Icon** - Visual representation

### Base Prices
- Herbal Teas: $10.99 - $11.99
- Green & Black Teas: $12.99 - $14.99
- Oolong & White Teas: $16.99 - $18.99
- Premium Teas: $22.99 - $24.99

## Technologies Used

- **React 18** - UI framework
- **CSS3** - Styling with gradients, flexbox, and grid
- **JavaScript ES6+** - Modern JavaScript
- **React Hooks** - State management with useState

## Color Scheme

- **Primary Green**: #2d5016 - Main brand color
- **Secondary Green**: #3d6e1f - Hover states
- **Accent Orange**: #ff6b35 - CTAs and highlights
- **Dark Background**: #1e1e1e - Dark mode elements
- **Light Background**: #f8f9fa - Page background

## Key Components

### TeaDeliveryApp (Main Component)
- State management for cart, current page, and user info
- Navigation between Home and Products pages
- Cart modal management
- Checkout logic

### HomePage
- Hero section with CTA
- Features grid
- Category showcase
- Customer testimonials

### ProductsPage
- Product grid layout
- Product cards with hover effects
- Add to cart functionality

### CartComponent
- Cart item list with quantity controls
- Order summary
- Delivery information form
- Checkout button

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- User authentication and accounts
- Payment integration (Stripe, PayPal)
- Order tracking
- Product reviews and ratings
- Wishlist functionality
- Search and filtering
- Admin panel
- Subscription service
- Blog section

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contact

**TeaDelivery Support**
- 📧 Email: info@teadelivery.com
- 📞 Phone: 1-800-TEA-DELIVERY
- 🌍 Available worldwide

---

Made with ❤️ for tea lovers everywhere 🍵
