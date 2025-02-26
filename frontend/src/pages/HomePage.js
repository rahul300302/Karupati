import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  backgroundColor: "red", 
  padding: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "60px",
  marginTop:"90px",
};

const logoStyle = {
  height: "40px",
  marginRight: "20px",
};

const searchBoxStyle = {
  padding: "8px 16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginRight: "50px",
};

const navLinksContainer = {
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  marginLeft: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "color 0.3s ease",
};

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={navbarStyle}>
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/path-to-your-logo.png" alt="Logo" style={logoStyle} />
          </Link>
        </div>

        {/* Search Box */}
        <input type="text" placeholder="Search..." style={searchBoxStyle} />

        {/* Navigation Links */}
        <ul style={navLinksContainer}>
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Products" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
            { path: "/cart", label: "Cart" },
          ].map((item, index) => (
            <li key={index} style={{ marginLeft: "10px" }}>
              <Link
                to={item.path}
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = "#fbbf24")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="home-page-container">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to Palm Karupatti</h1>
          <p className="hero-description">
            Your go-to source for premium palm karupatti products.
          </p>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .home-page-container {
          font-family: 'Arial', sans-serif;
          background-color: #f7f7f7;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
        }

        .hero-section {
          text-align: center;
          background-color: #fff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          width: 100%;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #7f8c8d;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-description {
            font-size: 1rem;
          }
          .hero-section {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
