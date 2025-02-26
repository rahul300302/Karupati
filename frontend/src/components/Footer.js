import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Palm Karupatti. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #2d2d2d;
          color: #fff;
          padding: 20px;
          width: 100%;
          position: relative;
          bottom: 0;
          left: 0;
          text-align: center;
          z-index: 999;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px;
        }

        .footer p {
          margin: 0;
          font-size: 1rem;
          font-weight: 400;
        }

        .social-icons {
          margin-top: 10px;
        }

        .social-icon {
          color: #fff;
          margin: 0 10px;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: #f39c12;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 15px;
          }

          .footer p {
            font-size: 0.9rem;
          }

          .social-icon {
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
