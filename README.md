# iStudio - E-Commerce Website

A complete, fully responsive e-commerce website built with HTML, CSS, Bootstrap 5, JavaScript, and jQuery.

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
1. Extract all files to a folder
2. Open `index.html` in your web browser
3. The website will load with all functionality available

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

## 📞 Support

For questions or issues:
- Email: support@istudio.com
- Phone: +1 (555) 123-4567
- Address: 123 Tech Street, Silicon Valley, CA 94025

## 📄 License

This project is provided as-is for educational and development purposes.

## 🙏 Credits

- **Bootstrap 5** - CSS Framework
- **Font Awesome** - Icon Library
- **jQuery** - JavaScript Library
- **Placeholder Images** - Via.placeholder.com

---

**Created**: April 2024  
**Version**: 1.0.0  
**Type**: Frontend E-Commerce Demo
