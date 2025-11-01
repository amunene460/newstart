// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.setAttribute('title', 'Switch to light mode');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('title', 'Switch to dark mode');
    }
});

// Product Data
const products = [
    {
        id: 1,
        name: "Ashwagandha",
        description: "Adaptogenic herb for stress relief and vitality",
        price: 850,
        category: "herbs",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 2,
        name: "Mukombero",
        description: "Traditional aphrodisiac and energy booster",
        price: 1200,
        category: "herbs",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 3,
        name: "Turmeric Powder",
        description: "Anti-inflammatory spice with numerous health benefits",
        price: 450,
        category: "spices",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 4,
        name: "Moringa Powder",
        description: "Nutrient-rich superfood with antioxidant properties",
        price: 600,
        category: "herbs",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 5,
        name: "Cinnamon Sticks",
        description: "Aromatic spice for cooking and health benefits",
        price: 350,
        category: "spices",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 6,
        name: "Ginger Root",
        description: "Fresh ginger for digestion and inflammation",
        price: 200,
        category: "herbs",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 7,
        name: "Chamomile Tea",
        description: "Calming herbal tea for relaxation and sleep",
        price: 550,
        category: "teas",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 8,
        name: "Lavender Oil",
        description: "Essential oil for relaxation and skin care",
        price: 1200,
        category: "oils",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 9,
        name: "Neem Leaves",
        description: "Antibacterial and antifungal medicinal herb",
        price: 400,
        category: "herbs",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 10,
        name: "Peppermint Oil",
        description: "Essential oil for digestion and mental clarity",
        price: 950,
        category: "oils",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 11,
        name: "Cardamom Pods",
        description: "Aromatic spice for cooking and digestive health",
        price: 750,
        category: "spices",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 12,
        name: "Hibiscus Flowers",
        description: "For herbal tea with antioxidant properties",
        price: 500,
        category: "teas",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 13,
        name: "Aloe Vera Gel",
        description: "Soothing gel for skin and digestive health",
        price: 650,
        category: "herbs",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 14,
        name: "Eucalyptus Oil",
        description: "Essential oil for respiratory health",
        price: 800,
        category: "oils",
        image: "https://images.unsplash.com/photo-1596043897220-80c6bd9c1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutForm = document.getElementById('checkoutForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const adminBtn = document.getElementById('adminBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const sellModal = document.getElementById('sellModal');
const sellWithUsBtn = document.getElementById('sellWithUsBtn');
const closeModalBtns = document.querySelectorAll('.close-modal');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const adminPanel = document.getElementById('adminPanel');
const logoutAdmin = document.getElementById('logoutAdmin');
const adminTabs = document.querySelectorAll('.admin-tab');
const adminContents = document.querySelectorAll('.admin-content');
const shopNowBtn = document.getElementById('shopNowBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const sellForm = document.getElementById('sellForm');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();
    checkUserStatus();
    
    // Add event listeners
    addEventListeners();
});

// Display products in the grid
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">KSh ${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-secondary" onclick="viewProduct(${product.id})">View Details</button>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filter products by category
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        if (filter === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === filter);
            displayProducts(filteredProducts);
        }
    });
});

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
    saveCartToStorage();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartModal() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">KSh ${item.price} x ${item.quantity}</div>
            </div>
            <div class="cart-item-actions">
                <button class="btn btn-secondary" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="btn btn-secondary" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="btn btn-primary" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total;
    checkoutTotal.textContent = total;
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartCount();
        updateCartModal();
        saveCartToStorage();
    }
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Modal functionality
function openModal(modal) {
    modal.style.display = 'flex';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

function addEventListeners() {
    // Cart icon click
    cartIcon.addEventListener('click', () => {
        updateCartModal();
        openModal(cartModal);
    });
    
    // Checkout button click
    checkoutBtn.addEventListener('click', () => {
        closeModal(cartModal);
        openModal(checkoutModal);
    });
    
    // Login/Register buttons
    loginBtn.addEventListener('click', () => openModal(loginModal));
    registerBtn.addEventListener('click', () => openModal(registerModal));
    
    // Sell with us button
    sellWithUsBtn.addEventListener('click', () => openModal(sellModal));
    
    // Shop now button
    shopNowBtn.addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Close modal buttons
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Modal background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Show register/login links
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    });
    
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    });
    
    // Form submissions
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    checkoutForm.addEventListener('submit', handleCheckout);
    sellForm.addEventListener('submit', handleSellForm);
    
    // Admin functionality
    adminBtn.addEventListener('click', () => {
        adminPanel.style.display = 'block';
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    
    logoutAdmin.addEventListener('click', handleLogout);
    
    // Admin tabs
    adminTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Update active tab
            adminTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            adminContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `admin${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Form handlers
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (email === 'admin@alimaq.com' && password === 'admin123') {
        currentUser = { email, role: 'admin' };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        checkUserStatus();
        closeModal(loginModal);
        showNotification('Admin login successful!');
    } else if (email && password) {
        currentUser = { email, role: 'customer' };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        checkUserStatus();
        closeModal(loginModal);
        showNotification('Login successful!');
    } else {
        showNotification('Please fill in all fields', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    currentUser = { name, email, role: 'customer' };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    checkUserStatus();
    closeModal(registerModal);
    showNotification('Registration successful!');
}

function handleCheckout(e) {
    e.preventDefault();
    const phone = document.getElementById('phoneNumber').value;
    
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    
    if (phone) {
        showNotification(`M-Pesa payment request sent to ${phone}. Please check your phone to complete payment.`);
        closeModal(checkoutModal);
        cart = [];
        updateCartCount();
        updateCartModal();
        saveCartToStorage();
    }
}

function handleSellForm(e) {
    e.preventDefault();
    showNotification('Your application has been submitted! We will contact you soon.');
    closeModal(sellModal);
    document.getElementById('sellForm').reset();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    checkUserStatus();
    adminPanel.style.display = 'none';
    showNotification('Logged out successfully');
}

function checkUserStatus() {
    if (currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        adminBtn.style.display = currentUser.role === 'admin' ? 'block' : 'none';
    } else {
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        adminBtn.style.display = 'none';
    }
}

// Utility functions
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`Viewing details for ${product.name}`);
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'error' ? '#f44336' : '#4caf50'};
        color: white;
        border-radius: 4px;
        z-index: 3000;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize admin products table
function initializeAdminProducts() {
    const adminProductsTable = document.getElementById('adminProductsTable');
    adminProductsTable.innerHTML = '';
    
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>KSh ${product.price}</td>
            <td>50</td>
            <td>
                <button class="btn btn-primary" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn-secondary" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;
        adminProductsTable.appendChild(row);
    });
}

function editProduct(productId) {
    showNotification(`Editing product ${productId}`);
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        showNotification('Product deleted');
    }
}

// Initialize admin panel when it's shown
const adminProductsTab = document.querySelector('[data-tab="products"]');
adminProductsTab.addEventListener('click', initializeAdminProducts);