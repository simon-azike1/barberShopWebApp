import React, { useState } from "react";
import logo from '../../assets/Images/logo_2.jpg';
import {Link} from 'react-router-dom'
import "./header.css";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="logo">
      <Link   to ="/"><img src={logo} alt="Logo"/>
      </Link>
       <Link to="/"  style={{textDecoration:"none"}}>
       <p className="shop-name">Mouad.Icap</p>
       </Link> 
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <nav className={`slide-menu ${isOpen ? "nav-open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link ></li>
          <li><Link to="/blog">Blog</Link></li>
          <li  className="book"><Link to="/book">Book appointment</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
