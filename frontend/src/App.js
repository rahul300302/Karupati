import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import Login from "./components/login";
import AdminLayout from "./components/admin/AdminLayout";
import ProductAdd from "./components/admin/ProductAdd";
import ProductView from "./components/admin/ProductView";
import Stocks from "./components/admin/Stocks";
import Settings from "./components/admin/Settings";

import './assets/styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("userLoggedIn");
    const role = localStorage.getItem("userRole");
    setIsLoggedIn(user === "true");
    setUserRole(role);
  }, []);

  return (
    <Router>
      {!isLoggedIn ? (
        <Routes>
          <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      ) : (
        <>
          {userRole === "admin" ? (
            <AdminLayout>
              <Routes>
                <Route path="/admin/product-add" element={<ProductAdd />} />
                <Route path="/admin/product-view" element={<ProductView />} />
                <Route path="/admin/stocks" element={<Stocks />} />
                <Route path="/admin/settings" element={<Settings />} />
                <Route path="/admin/*" element={<Navigate to="/admin/product-add" />} />
              </Routes>
            </AdminLayout>
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
                  {/* Redirect admin routes to home for non-admin users */}
                  <Route path="/admin/*" element={<Navigate to="/" />} />
                </Routes>
              </div>
              <Footer />
            </>
          )}
        </>
      )}
    </Router>
  );
}

export default App;
