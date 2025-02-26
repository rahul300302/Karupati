import React, { useState } from "react";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: "Palm Karupatti", 
      price: 10, 
      quantity: 1, 
      image: "/path-to-your-image/palm-karupatti.jpg" // Add image URL
    },
    { 
      id: 2, 
      name: "Palm Karupatti 2", 
      price: 15, 
      quantity: 1, 
      image: "/path-to-your-image/palm-karupatti-2.jpg" // Add image URL
    },
    // Add more items as needed
  ]);
  console.log(setCartItems);
  const [showModal, setShowModal] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div>
              <span>{item.name}</span>
              <span>${item.price} x {item.quantity}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Total: ${total}</p>
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>
        Proceed to Checkout
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Checkout Confirmation</h2>
            <p>Your total amount is ${total}</p>
            <button onClick={handleCloseModal} className="modal-btn">
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .cart-container {
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .cart-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 16px;
          color: #333;
          text-align: center;
        }

        .cart-items {
          margin-bottom: 16px;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          font-size: 1.1rem;
          align-items: center;
        }

        .cart-item img {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          object-fit: cover;
        }

        .total-price {
          font-size: 1.2rem;
          font-weight: bold;
          text-align: right;
          margin-top: 10px;
        }

        .checkout-btn {
          display: block;
          width: 100%;
          padding: 12px;
          background-color: #4CAF50;
          color: white;
          font-size: 1.1rem;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
          transition: background-color 0.3s;
        }

        .checkout-btn:hover {
          background-color: #45a049;
        }

        /* Modal Styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          width: 300px;
          text-align: center;
        }

        .modal-btn {
          background-color: #f44336;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 15px;
        }

        .modal-btn:hover {
          background-color: #d32f2f;
        }
      `}</style>
    </div>
  );
}

export default CartPage;
