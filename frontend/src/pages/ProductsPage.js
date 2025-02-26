import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "../pages/ProductsPage.css"; // External CSS file

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/karupati/api/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Debugging API response
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && typeof data === "object" && data.products) {
          setProducts(data.products); // Handle case where data.products is an array
        } else {
          setProducts([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="products-page-container">
      <div className="products-grid">
        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && products.length === 0 && <p>No products found.</p>}
        {!loading &&
          !error &&
          Array.isArray(products) &&
          products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default ProductsPage;
