import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2><i className="fas fa-cut"></i>Barber Shop</h2>
          <p>
            Welcome to Barber Shope, where classic tradition meets contemporary style.
            Our team of skilled barbers is dedicated to providing top-notch grooming.
          </p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#"><i className="fab fa-x-twitter"></i></Link>
            <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>

        <div className="footer-links">
          <h4>Main Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/expertDetails">Expert Details</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Utility Pages</h4>
          <ul>
            <li><a href="/">Booking Guide</a></li>
            <li><a href="/">Blog page</a></li>
            <li><a href="/">Back drop</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © <span className="brand">SamzikTech</span> | Designed by <span className="highlight">SamzikTech</span>.
        </p>
      </div>
    </footer>
  );
}
