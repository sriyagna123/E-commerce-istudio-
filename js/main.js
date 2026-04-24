/* ======================================
   E-COMMERCE WEBSITE - MAIN JAVASCRIPT
   ====================================== */

// ====== CART MANAGEMENT ======

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navbar
function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.querySelector('.cart-count');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
  }
}

// Add item to cart
function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showNotification('Product added to cart!', 'success');
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Update item quantity
function updateCartItemQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, parseInt(quantity));
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Get cart total
function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartItemCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// ====== NOTIFICATION SYSTEM ======

function showNotification(message, type = 'info') {
  // Remove existing notification if any
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  const notification = document.createElement('div');
  notification.className = `notification alert alert-${type === 'success' ? 'success' : 'info'} position-fixed`;
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '10000';
  notification.style.minWidth = '300px';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease-in-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ====== SCROLL TO TOP ======

const scrollToTopBtn = document.querySelector('.scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ====== FORM VALIDATION ======

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\d\s\-\+\(\)]{10,}$/;
  return re.test(phone);
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;

  inputs.forEach(input => {
    let valid = true;

    if (input.type === 'email') {
      valid = validateEmail(input.value);
    } else if (input.name === 'phone') {
      valid = validatePhone(input.value);
    } else {
      valid = input.value.trim() !== '';
    }

    const errorMsg = input.parentElement.querySelector('.error-message');
    if (!valid) {
      isValid = false;
      if (errorMsg) {
        errorMsg.style.display = 'block';
      } else {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = `${input.name} is invalid`;
        input.parentElement.appendChild(error);
      }
      input.classList.add('is-invalid');
    } else {
      if (errorMsg) {
        errorMsg.style.display = 'none';
      }
      input.classList.remove('is-invalid');
    }
  });

  return isValid;
}

// ====== SEARCH FUNCTIONALITY ======

function performSearch(query) {
  if (!query || query.trim() === '') {
    showNotification('Please enter a search term', 'info');
    return;
  }

  // Store search query in session storage
  sessionStorage.setItem('searchQuery', query);
  
  // Redirect to search page
  window.location.href = 'search.html';
}

// ====== PRICE FORMATTER ======

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}

// ====== FILTER & SORT PRODUCTS ======

function filterProducts(products, filters) {
  return products.filter(product => {
    // Category filter
    if (filters.category && filters.category !== '' && product.category !== filters.category) {
      return false;
    }

    // Price range filter
    if (filters.minPrice && product.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && product.price > filters.maxPrice) {
      return false;
    }

    // Search filter
    if (filters.search) {
      const search = filters.search.toLowerCase();
      return product.name.toLowerCase().includes(search) ||
             product.description.toLowerCase().includes(search);
    }

    return true;
  });
}

function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
  }

  return sorted;
}

// ====== GET UNIQUE CATEGORIES ======

function getUniqueCategories(products) {
  return [...new Set(products.map(p => p.category))];
}

// ====== GENERATE STAR RATING ======

function generateStarRating(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }

  return stars;
}

// ====== INITIALIZE PAGE ======

document.addEventListener('DOMContentLoaded', () => {
  // Update cart count on page load
  updateCartCount();

  // Initialize Bootstrap tooltips and popovers if needed
  if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  // Handle search form submission
  const searchForm = document.querySelector('.navbar-search form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = document.querySelector('.navbar-search input').value;
      performSearch(query);
    });
  }
});

// ====== LOCAL STORAGE UTILITIES ======

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

// ====== QUANTITY SELECTOR ======

function setupQuantitySelector(elementId, onChangeCallback) {
  const container = document.getElementById(elementId);
  if (!container) return;

  const minusBtn = container.querySelector('.qty-minus');
  const plusBtn = container.querySelector('.qty-plus');
  const input = container.querySelector('.qty-input');

  if (minusBtn && plusBtn && input) {
    minusBtn.addEventListener('click', () => {
      let value = parseInt(input.value) || 1;
      input.value = Math.max(1, value - 1);
      if (onChangeCallback) onChangeCallback(parseInt(input.value));
    });

    plusBtn.addEventListener('click', () => {
      let value = parseInt(input.value) || 1;
      input.value = value + 1;
      if (onChangeCallback) onChangeCallback(parseInt(input.value));
    });

    input.addEventListener('change', () => {
      let value = parseInt(input.value) || 1;
      input.value = Math.max(1, value);
      if (onChangeCallback) onChangeCallback(parseInt(input.value));
    });
  }
}

// ====== WISHLIST MANAGEMENT ======

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(productId) {
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    showNotification('Added to wishlist!', 'success');
  } else {
    removeFromWishlist(productId);
  }
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(id => id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function isInWishlist(productId) {
  return wishlist.includes(productId);
}

// ====== IMAGE LAZY LOADING ======

function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);
