import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import Login from "./components/login";

import './assets/styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("userLoggedIn");
    console.log("User Logged In Status:", user); // Debugging
    setIsLoggedIn(user === "true");
  }, []);

  return (
    <Router>
      {!isLoggedIn ? (
        <Routes>
          <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <div className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
