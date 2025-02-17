import { useEffect, useState } from 'react';
import {
    FiHome,
    FiMail,
    FiMenu,
    FiSearch,
    FiShoppingBag,
    FiShoppingCart,
    FiUser,
    FiX
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Demo value

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="logo">
            HerbalNature
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            <Link to="/" className="nav-link">
              <FiHome />
              Home
            </Link>

            <Link to="/shop" className="nav-link">
              <FiShoppingBag />
              Shop
            </Link>

            <Link to="/contact" className="nav-link">
              <FiMail />
              Contact
            </Link>

            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
              />
              <FiSearch className="search-icon" />
            </div>

            {/* Cart */}
            <Link to="/cart" className="cart-link">
              <FiShoppingCart />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>

            {/* Login */}
            <Link to="/login" className="btn-primary">
              <FiUser />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <FiSearch className="search-icon" />
          </div>

          <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            <FiHome />
            Home
          </Link>

          <Link to="/shop" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            <FiShoppingBag />
            Shop
          </Link>

          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            <FiMail />
            Contact
          </Link>

          <Link to="/cart" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            <FiShoppingCart />
            Cart
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>

          <Link to="/login" className="btn-primary" onClick={() => setIsOpen(false)}>
            <FiUser />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
