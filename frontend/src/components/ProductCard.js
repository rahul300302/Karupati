import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>

      <style jsx>{`
        .product-card {
          background-color: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        .product-info {
          margin-top: 15px;
        }

        .product-name {
          font-size: 1.25rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }

        .product-name:hover {
          color: #2ecc71;
        }

        .product-description {
          font-size: 1rem;
          color: #7f8c8d;
          margin-bottom: 15px;
        }

        .product-price {
          font-size: 1.2rem;
          font-weight: bold;
          color: #e67e22;
          margin-top: 10px;
        }

        /* Responsive Design for smaller screens */
        @media (max-width: 768px) {
          .product-card {
            padding: 15px;
          }

          .product-name {
            font-size: 1.1rem;
          }

          .product-description {
            font-size: 0.95rem;
          }

          .product-price {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductCard;
