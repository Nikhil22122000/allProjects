import React, { useState } from 'react';
import './TeaDeliveryApp.css';

function TeaDeliveryApp() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const teaProducts = [
        {
            id: 1,
            name: 'Green Tea Jasmine',
            category: 'Green Tea',
            price: 12.99,
            image: '🌿',
            description: 'Fresh and aromatic jasmine green tea',
            quantity: 100,
        },
        {
            id: 2,
            name: 'Black Tea Assam',
            category: 'Black Tea',
            price: 14.99,
            image: '♨',
            description: 'Rich and robust Assam black tea',
            quantity: 100,
        },
        {
            id: 3,
            name: 'Oolong Dragon Well',
            category: 'Oolong Tea',
            price: 16.99,
            image: '🐉',
            description: 'Premium Dragon Well oolong tea',
            quantity: 100,
        },
        {
            id: 4,
            name: 'White Tea Silver Needle',
            category: 'White Tea',
            price: 18.99,
            image: '⭐',
            description: 'Delicate white tea with silver tips',
            quantity: 100,
        },
        {
            id: 5,
            name: 'Herbal Chamomile',
            category: 'Herbal Tea',
            price: 10.99,
            image: '🌼',
            description: 'Calming chamomile herbal blend',
            quantity: 100,
        },
        {
            id: 6,
            name: 'Pu-erh Tea Aged',
            category: 'Pu-erh Tea',
            price: 22.99,
            image: '🏺',
            description: 'Premium aged pu-erh tea',
            quantity: 100,
        },
        {
            id: 7,
            name: 'Matcha Green',
            category: 'Specialty Tea',
            price: 24.99,
            image: '🍵',
            description: 'Fine Japanese matcha powder',
            quantity: 100,
        },
        {
            id: 8,
            name: 'Mint Infusion',
            category: 'Herbal Tea',
            price: 11.99,
            image: '🌱',
            description: 'Refreshing mint herbal infusion',
            quantity: 100,
        },
    ];

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, cartQuantity: item.cartQuantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, cartQuantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart(
                cart.map((item) =>
                    item.id === productId ? { ...item, cartQuantity: quantity } : item
                )
            );
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.cartQuantity, 0).toFixed(2);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.cartQuantity, 0);
    };

    const handleCheckout = () => {
        if (!userInfo.name || !userInfo.email || !userInfo.address) {
            alert('Please fill in all required fields');
            return;
        }
        alert(`Order placed successfully! Total: $${getTotalPrice()}\nDelivery to: ${userInfo.address}`);
        setCart([]);
        setShowCart(false);
        setCurrentPage('home');
        setUserInfo({ name: '', email: '', address: '', phone: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    // Home Page Component
    const HomePage = () => (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>Premium Tea Delivery 🍵</h1>
                    <p>Discover the finest teas from around the world, delivered to your doorstep</p>
                    <button
                        className="cta-button"
                        onClick={() => setCurrentPage('products')}
                    >
                        Shop Now
                    </button>
                </div>
            </section>

            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">🚚</div>
                    <h3>Fast Delivery</h3>
                    <p>Get your tea within 24-48 hours</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">✨</div>
                    <h3>Premium Quality</h3>
                    <p>Sourced from the best tea estates</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🌍</div>
                    <h3>Global Selection</h3>
                    <p>Teas from all around the world</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">💚</div>
                    <h3>Fresh & Natural</h3>
                    <p>100% organic and natural ingredients</p>
                </div>
            </section>

            <section className="categories">
                <h2>Tea Categories</h2>
                <div className="category-grid">
                    {['Green Tea', 'Black Tea', 'Oolong Tea', 'White Tea', 'Herbal Tea', 'Specialty Tea'].map(
                        (category) => (
                            <div key={category} className="category-card">
                                <h3>{category}</h3>
                                <button onClick={() => setCurrentPage('products')}>
                                    Explore
                                </button>
                            </div>
                        )
                    )}
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p>"Best tea delivery service! Super fresh and quick delivery."</p>
                        <span>⭐⭐⭐⭐⭐ Sarah M.</span>
                    </div>
                    <div className="testimonial-card">
                        <p>"Amazing variety and competitive prices. Highly recommended!"</p>
                        <span>⭐⭐⭐⭐⭐ John D.</span>
                    </div>
                    <div className="testimonial-card">
                        <p>"The quality is exceptional. Will definitely order again!"</p>
                        <span>⭐⭐⭐⭐⭐ Emma T.</span>
                    </div>
                </div>
            </section>
        </div>
    );

    // Products Page Component
    const ProductsPage = () => (
        <div className="products-page">
            <h1>Our Tea Collection</h1>
            <div className="products-grid">
                {teaProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">{product.image}</div>
                        <div className="product-info">
                            <div className="product-category">{product.category}</div>
                            <h3>{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <div className="product-price">${product.price}</div>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // Cart Component
    const CartComponent = () => (
        <div className="cart-modal-overlay" onClick={() => setShowCart(false)}>
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="close-btn" onClick={() => setShowCart(false)}>
                        ✕
                    </button>
                </div>

                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                        <button
                            className="continue-shopping-btn"
                            onClick={() => setShowCart(false)}
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">{item.image}</div>
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>${item.price}</p>
                                    </div>
                                    <div className="quantity-control">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.cartQuantity - 1)
                                            }
                                        >
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            value={item.cartQuantity}
                                            onChange={(e) =>
                                                updateQuantity(item.id, parseInt(e.target.value))
                                            }
                                        />
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.cartQuantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="item-total">
                                        ${(item.price * item.cartQuantity).toFixed(2)}
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        🗑
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="checkout-section">
                            <div className="order-summary">
                                <h3>Order Summary</h3>
                                <div className="summary-row">
                                    <span>Items:</span>
                                    <span>{getTotalItems()}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Subtotal:</span>
                                    <span>${getTotalPrice()}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery:</span>
                                    <span>Free</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total:</span>
                                    <span>${getTotalPrice()}</span>
                                </div>
                            </div>

                            <div className="user-info-form">
                                <h3>Delivery Information</h3>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={userInfo.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={userInfo.email}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Delivery Address"
                                    value={userInfo.address}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={userInfo.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button className="checkout-btn" onClick={handleCheckout}>
                                Complete Order
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );

    return (
        <div className="tea-delivery-app">
            {/* Navigation */}
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo" onClick={() => setCurrentPage('home')}>
                        🍵 TeaDelivery
                    </div>
                    <div className="nav-links">
                        <button
                            className={currentPage === 'home' ? 'active' : ''}
                            onClick={() => setCurrentPage('home')}
                        >
                            Home
                        </button>
                        <button
                            className={currentPage === 'products' ? 'active' : ''}
                            onClick={() => setCurrentPage('products')}
                        >
                            Shop
                        </button>
                        <button className="cart-button" onClick={() => setShowCart(true)}>
                            🛒 Cart ({getTotalItems()})
                        </button>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <main className="main-content">
                {currentPage === 'home' && <HomePage />}
                {currentPage === 'products' && <ProductsPage />}
            </main>

            {/* Cart Modal */}
            {showCart && <CartComponent />}

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About TeaDelivery</h4>
                        <p>Premium tea delivery service bringing the finest teas to your home.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>📧 info@teadelivery.com</p>
                        <p>📞 1-800-TEA-DELIVERY</p>
                        <p>🌍 Available worldwide</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 TeaDelivery. All rights reserved. | Free shipping on all orders</p>
                </div>
            </footer>
        </div>
    );
}

export default TeaDeliveryApp;
