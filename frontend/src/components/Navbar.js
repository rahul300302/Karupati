import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#2d3748", // Dark gray background
    padding: "16px", // Padding
    display: "flex",
    alignItems: "center", // Centers logo and search box vertically
    justifyContent: "space-between", // Distributes space between logo, search box, and links
  };

  const logoStyle = {
    height: "40px", // Logo size
    marginRight: "20px", // Adds space between logo and search box
  };

  const searchBoxStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "50px", // Adds space between search box and nav links
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "8px 16px", // Adds padding to the links
    borderRadius: "4px", // Rounded corners for the links
    marginLeft: "10px", // Adds space between each link
  };

  const linkHoverStyle = {
    color: "#fbbf24", // Yellow on hover
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" style={logoStyle} />
        </Link>
      </div>

      {/* Search Box Section */}
      <input type="text" placeholder="Search..." style={searchBoxStyle} />

      {/* Navigation Links */}
      <ul style={{ display: "flex", margin: 0 }}>
        <li>
          <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = 'white'}>Home</Link>
        </li>
        <li>
          <Link to="/products" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = 'white'}>Products</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = 'white'}>About</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = 'white'}>Contact</Link>
        </li>
        <li>
          <Link to="/cart" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = 'white'}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
