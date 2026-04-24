# iStudio - E-Commerce Website

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=flat-square&logo=github)](https://github.com/sriyagna123/E-commerce-istudio-)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/)

A complete, fully responsive e-commerce website built with HTML, CSS, Bootstrap 5, JavaScript, and jQuery. Features product catalog, shopping cart, checkout process, and admin-friendly design.

## 📋 Table of Contents

- [🚀 Live Demo](#-live-demo)
- [📸 Screenshots](#-screenshots)
- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🎯 Getting Started](#-getting-started)
- [📦 Data Management](#-data-management)
- [🎨 Design Features](#-design-features)
- [📱 Responsive Design](#-responsive-design)
- [🔐 Security Notes](#-security-notes)
- [🚀 How to Extend](#-how-to-extend)
- [✅ Tested Features](#-tested-features)
- [🌐 Browser Compatibility](#-browser-compatibility)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Credits](#-credits)
- [📞 Support](#-support)

## 🚀 Live Demo

[🌐 View Live Demo](https://sriyagna123.github.io/E-commerce-istudio-) *(Enable GitHub Pages for live hosting)*

## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://via.placeholder.com/800x400/007bff/ffffff?text=Home+Page+Screenshot)

### 🛍️ Product Listing
![Product Listing](https://via.placeholder.com/800x400/28a745/ffffff?text=Product+Listing+Screenshot)

### 🛒 Shopping Cart
![Shopping Cart](https://via.placeholder.com/800x400/dc3545/ffffff?text=Shopping+Cart+Screenshot)

### 📱 Mobile Responsive
![Mobile View](https://via.placeholder.com/400x600/6c757d/ffffff?text=Mobile+View+Screenshot)

## 📁 Project Structure

```
istudio/
├── index.html                 # Home page
├── products.html              # Product listing page with filters
├── product-details.html       # Individual product details page
├── cart.html                  # Shopping cart page
├── checkout.html              # Checkout/billing page
├── order-confirmation.html    # Order confirmation page
├── about.html                 # About us page
├── contact.html               # Contact us page
├── search.html                # Search results page
│
├── css/
│   └── style.css              # Main stylesheet (all pages use this)
│
├── js/
│   └── main.js                # Main JavaScript file (utilities & cart logic)
│
├── data/
│   └── products.json          # Product database
│
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required - this is a frontend-only demo

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/sriyagna123/E-commerce-istudio-.git
   cd E-commerce-istudio-
   ```

2. **Open in browser:**
   - Open `index.html` in your web browser
   - Or use a local server (recommended for better functionality)

3. **Using Local Server (Recommended):**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

### Deployment Options

#### 🌐 GitHub Pages (Free)
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Select **Deploy from a branch**
4. Choose **main/master** branch and **/(root)** folder
5. Click **Save**
6. Your site will be live at: `https://sriyagna123.github.io/E-commerce-istudio-/`

#### ☁️ Other Hosting Options
- **Netlify**: Drag & drop the folder or connect GitHub repo
- **Vercel**: Import from GitHub for instant deployment
- **Firebase**: Use Firebase Hosting for CDN and SSL
- **AWS S3**: Static website hosting with CloudFront
- **Traditional Hosting**: Upload files via FTP

## ✨ Features

### 1. **Home Page** (index.html)
- Responsive navbar with navigation menu
- Image carousel/slider with hero content
- Shop by category section with gradient cards
- Latest products grid layout
- Features section (Free Shipping, Secure Payment, 24/7 Support)
- Professional footer with links and contact info
- Smooth scroll-to-top button

### 2. **Product List Page** (products.html)
- Grid layout displaying all products
- Sidebar filters:
  - Category filter (radio buttons)
  - Price range filter with min/max inputs
- Sorting options:
  - Alphabetical (A-Z, Z-A)
  - Price (Low to High, High to Low)
  - Top Rated
- Product cards with image, name, price, rating
- Add to cart and wishlist buttons
- Responsive design for mobile devices

### 3. **Product Details Page** (product-details.html)
- Product image gallery (carousel with thumbnails)
- Product information:
  - Name, category, price
  - Product rating and reviews
  - Detailed description
  - Product specifications
- Quantity selector (+/- buttons)
- Add to cart and add to wishlist buttons
- Related products section (from same category)
- Breadcrumb navigation

### 4. **Shopping Cart Page** (cart.html)
- List of all items in cart
- Product details for each item
- Quantity adjustment buttons (increase/decrease)
- Remove item functionality
- Real-time price calculation
- Order summary:
  - Subtotal
  - Shipping (Free over $50, $10 otherwise)
  - Tax (10%)
  - Total
- Coupon code input field
- Proceed to checkout button
- Empty cart message with link to continue shopping

### 5. **Checkout Page** (checkout.html)
- Form validation for all fields
- Billing information form:
  - First Name, Last Name
  - Email, Phone Number
- Shipping address form:
  - Street Address, Apartment/Suite
  - City, State, ZIP Code
- Payment method selection:
  - Credit Card
  - Debit Card
  - PayPal
- Order summary sidebar
- Terms and conditions checkbox
- Place order button with form validation

### 6. **Order Confirmation Page** (order-confirmation.html)
- Success message with icon
- Order details:
  - Order number
  - Order date
  - Estimated delivery date
  - Order status
- Customer information display
- Shipping address display
- Order items list
- Order summary with breakdown
- Return to home and continue shopping buttons
- Confirmation email notification

### 7. **About Us Page** (about.html)
- Company introduction
- Mission and vision statements
- Why choose us section with 4 key points
- Team members section with profile cards
- Company statistics (customers, products, countries, rating)
- Professional layout with gradients

### 8. **Contact Us Page** (contact.html)
- Contact information:
  - Phone number
  - Email addresses
  - Office address
  - Business hours
- Social media links
- Contact form with validation:
  - Name, Email, Phone
  - Subject dropdown
  - Message textarea
  - Consent checkbox
- Form validation with error messages
- Success message on submission
- FAQ section with accordion items (6 FAQs)

### 9. **Search Page** (search.html)
- Search bar in header for new searches
- Display search query
- Product grid showing matching results
- Sorting options for search results
- Popular search tags/buttons
- No results message with suggestions
- Results count display

## 🛠️ Technology Stack

### Frontend Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with animations and gradients
- **Bootstrap 5** - Responsive grid system and components
- **JavaScript (ES6+)** - Dynamic functionality
- **jQuery** - DOM manipulation (included but minimal usage)
- **Font Awesome 6** - Icons for UI elements

### Key Libraries
```html
<!-- Bootstrap 5 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- Font Awesome 6 -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">

<!-- jQuery (optional) -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## 📦 Data Management

### Product Database (data/products.json)
The website includes 12 sample products across 4 categories:
- **Electronics**: Wireless Headphones, Smart Watch, Mechanical Keyboard, Webcam
- **Accessories**: Laptop Stand, USB-C Hub, Wireless Mouse, Phone Charger, Monitor Stand, Desk Mat
- **Cables**: USB-C Cable
- **Furniture**: Desk Lamp

Each product includes:
- ID, Name, Category
- Price, Original Price
- Rating (0-5 stars)
- Description
- Product details/specifications
- Image URL (using placeholder images)

### LocalStorage Implementation
The website uses browser's localStorage API for:
- **Cart Data** - Persistent shopping cart across page refreshes
- **Wishlist** - List of favorited products
- **Order Data** - Last order information for confirmation page

## 🎯 Functionality Details

### Cart Management
- Add products to cart with quantity
- Quantity increment/decrement buttons
- Remove items from cart
- Real-time total calculation
- Shipping calculation based on order total
- Tax calculation (10% of subtotal)
- LocalStorage persistence

### Search Functionality
- Search by product name
- Search by category
- Search by product description
- Real-time result filtering
- Sorting of search results
- Popular search suggestions

### Form Validation
- Email validation using regex
- Phone number validation
- Required field validation
- Minimum character length for messages
- Real-time error message display
- Removes error on field edit

### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Flexible grid layouts
- Responsive navbar with toggle menu
- Touch-friendly buttons and inputs
- Optimized for all screen sizes

## 🎨 Design Features

### Color Scheme
- Primary: #007bff (Blue)
- Secondary: #6c757d (Gray)
- Success: #28a745 (Green)
- Danger: #dc3545 (Red)
- Dark: #343a40 (Dark Gray)
- Light: #f8f9fa (Light Gray)

### Typography
- Font Family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes
- Proper heading hierarchy

### Spacing & Layout
- Consistent padding and margins
- Bootstrap grid system
- Flexbox layouts
- Smooth transitions and animations

### Interactive Elements
- Hover effects on buttons and cards
- Smooth scrolling
- Product card elevation on hover
- Loading spinners
- Toast notifications
- Smooth transitions

## 📱 Responsive Breakpoints

```css
Desktop: 1200px+
Tablet: 768px - 1199px
Mobile: 576px - 767px
Small Mobile: Below 576px
```

## 🔐 Security Notes

**Important**: This is a demo/educational project. For production:
- Implement proper backend authentication
- Use HTTPS for all connections
- Implement secure payment gateway integration
- Validate all input server-side
- Implement proper database security
- Add CSRF protection
- Implement proper user session management

## 🚀 How to Extend

### Add More Products
Edit `data/products.json`:
```json
{
  "id": 13,
  "name": "New Product",
  "category": "Electronics",
  "price": 99.99,
  "originalPrice": 149.99,
  "rating": 4.5,
  "image": "https://via.placeholder.com/300x300?text=Product",
  "description": "Product description",
  "details": "Product details"
}
```

### Customize Styling
Edit `css/style.css`:
- Modify color variables at the top
- Update fonts and sizing
- Add new component styles

### Add New Features
Edit `js/main.js`:
- Add new utility functions
- Extend existing features
- Add API integration points

## ✅ Tested Features

- ✅ Navigation and page linking
- ✅ Product filtering (category and price)
- ✅ Product sorting
- ✅ Search functionality
- ✅ Add to cart
- ✅ Remove from cart
- ✅ Quantity adjustment
- ✅ Cart persistence (localStorage)
- ✅ Price calculations
- ✅ Form validation
- ✅ Responsive design
- ✅ Smooth scrolling
- ✅ Wishlist functionality

## 📝 File Sizes

- index.html: ~8 KB
- products.html: ~9 KB
- product-details.html: ~11 KB
- cart.html: ~7 KB
- checkout.html: ~10 KB
- order-confirmation.html: ~11 KB
- about.html: ~10 KB
- contact.html: ~14 KB
- search.html: ~10 KB
- css/style.css: ~45 KB
- js/main.js: ~12 KB
- data/products.json: ~8 KB

**Total: ~155 KB** (Minimal and fast-loading)

## 🌐 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### How to Contribute
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Test your changes across different browsers
- Ensure responsive design works on mobile devices
- Update documentation if needed
- Use meaningful commit messages

### Bug Reports & Feature Requests
- Use GitHub Issues to report bugs
- Provide detailed steps to reproduce
- Include browser and device information
- Suggest improvements with clear descriptions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

**Limitations:**
- ❌ Liability
- ❌ Warranty

**Conditions:**
- 📝 License and copyright notice

### For Production Use
⚠️ **Important**: This is a demo/educational project. For production deployment:
- Implement proper backend authentication
- Use HTTPS for all connections
- Implement secure payment gateway integration
- Validate all input server-side
- Implement proper database security
- Add CSRF protection
- Implement proper user session management

## � Development

### Prerequisites for Development
- **Code Editor**: VS Code, Sublime Text, or any modern editor
- **Browser**: Chrome/Edge for development (DevTools)
- **Git**: Version control
- **Local Server**: For testing AJAX calls and avoiding CORS issues

### Development Workflow
1. **Setup Development Environment**
2. **Make Changes** to HTML, CSS, or JavaScript files
3. **Test Locally** using a local server
4. **Test Responsiveness** using browser DevTools
5. **Commit Changes** with descriptive messages
6. **Push to GitHub** and create Pull Request

### File Organization
- **HTML**: Semantic, accessible markup
- **CSS**: Modular, BEM-like naming convention
- **JavaScript**: ES6+ features, clean functions
- **JSON**: Structured data format
- **Images**: Optimized, proper naming

## 📊 Project Metrics

- **Total Files**: 39
- **Lines of Code**: ~6,800
- **Total Size**: ~155 KB
- **Pages**: 9 HTML pages
- **Products**: 10 sample products
- **Categories**: 4 product categories
- **Responsive Breakpoints**: 4 (mobile-first)

## 🔗 API Integration Points

While this is a frontend-only demo, here are the integration points for backend:

### Product Management
```javascript
// Fetch products
fetch('data/products.json')
  .then(response => response.json())
  .then(data => {
    // Handle product data
  });

// Add to cart (would be API call)
POST /api/cart/add
{
  "productId": 1,
  "quantity": 2
}
```

### User Authentication (Future)
```javascript
// Login
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "hashed_password"
}
```

### Order Processing (Future)
```javascript
// Create order
POST /api/orders
{
  "customer": {...},
  "items": [...],
  "total": 199.99
}
```

## 🙏 Credits

### Core Technologies
- **[Bootstrap 5.1.3](https://getbootstrap.com/)** - CSS Framework & Components
- **[Font Awesome 6.0.0](https://fontawesome.com/)** - Icon Library
- **[jQuery 3.6.0](https://jquery.com/)** - DOM Manipulation
- **[Unsplash](https://unsplash.com/)** - High-quality Product Images

### Development Tools
- **Visual Studio Code** - Code Editor
- **Git** - Version Control
- **GitHub** - Repository Hosting
- **Browser DevTools** - Debugging & Testing

### Special Thanks
- **Bootstrap Team** for the amazing framework
- **Font Awesome** for comprehensive icon sets
- **Unsplash Contributors** for beautiful stock photos
- **Open Source Community** for inspiration and tools

---

**🏗️ Built with ❤️ by [Sriyagna](https://github.com/sriyagna123)**  
**📅 Created**: April 2024  
**🔄 Last Updated**: April 2026  
**📋 Version**: 1.0.0  
**🏷️ Type**: Frontend E-Commerce Demo
