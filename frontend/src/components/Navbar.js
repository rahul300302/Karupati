import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import the CSS file

function Navbar() {
  // Placeholder function for logout
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Search Box Section */}
      <input type="text" placeholder="Search..." className="navbar-search" />

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="navbar-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" className="navbar-link">
            Cart
          </Link>
        </li>
        {/* Logout Button */}
        <li>
          <button onClick={handleLogout} className="navbar-logout">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
