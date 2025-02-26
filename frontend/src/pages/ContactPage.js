import React from "react";
import { Link } from "react-router-dom";


function ContactPage() {
  return (
    <div style={{
    }}>
      
    <div className="contact-container">

      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="form-input"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="form-input"
        />
        <textarea
          placeholder="Your Message"
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>

      <style jsx>{`
        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .contact-title {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          color: #333;
          margin-bottom: 24px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: #4CAF50;
          outline: none;
        }

        .form-textarea {
          height: 120px;
        }

        .form-button {
          padding: 12px;
          background-color: #4CAF50;
          color: white;
          font-size: 1rem;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .form-button:hover {
          background-color: #45a049;
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 16px;
          }
        }
      `}</style>
    </div>
    </div>
  );
}

export default ContactPage;
