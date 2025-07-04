import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src= "https://res.cloudinary.com/de2eavqtk/video/upload/v1751056712/cqs1fxqi0ltdu1awq4nd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <div className="hero-content">
          <h1 style={{color:"white"}}>Smooth Experience.</h1>
          <p className="para-content">
            Your go-to barber shop for classic and modern styles. 
            
          </p>
          <div className="hero-buttons">
            <Link to="/contact">
              <button className="primary-btn secondary-btn">Contact Us Now !</button>
            </Link>
            <Link to="/service">
              <button className="secondary-btn">Explore Styles</button>
            </Link>
            <div className="block-star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i>✂️ Precision Haircuts</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
