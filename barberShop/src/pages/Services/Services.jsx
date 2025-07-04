import React, { useRef } from 'react'; 
import './services.css';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import Images2 from '@/assets/Images/Img-2.jpg'
import Images5 from '@/assets/Images/Img-5.jpg'
import Images6 from '@/assets/Images/Img-6.jpg'
import Images7 from '@/assets/Images/Img-7.jpg'
import Images8 from '@/assets/Images/Img-8.jpg'
import Images9 from '@/assets/Images/Img-9.jpg'

function Services() {
  
  const serviceScrollRef = useRef(null);
  const  serviceScrollTo = () => {
    if(serviceScrollRef.current){
      serviceScrollRef.current.scrollIntoView({behavior:"smooth"})
    }
  }
  
  const services = [
    {
      title: "Haircut & Styling",
      description: "Classic cuts, fades, and modern styles tailored to your taste.",
      icon: "✂️",
      image: Images2,
    },
    {
      title: "Beard Grooming",
      description: "Sharp trims, shaping, and conditioning for a polished look.",
      icon: "🧔",
      image: Images6,
    },
    {
      title: "Facials & Skincare",
      description: "Deep-cleansing facials to refresh and rejuvenate your skin.",
      icon: "🧴",
      image: Images9,
    },
    {
      title: "Kids' Haircuts",
      description: "Where kids love haircuts and parents love the results!",
      icon: "🧔",
      image: Images5,
    },
    {
      title: "Men Haircut",
      description: "Precision haircuts for the modern gentleman.",
      icon: "🧖‍♂️ ",
      image: Images7,
    },
    {
      title: "Youth Classic Cut",
      description: "Classic style for boys and young men fresh and age-appropriate.",
      icon: "🧖‍♀️",
      image: Images8,
    }
  ];

  return (
    <>
<Header/>
  <div className="services-page">
      <div className="hero-section">
        <h1 className="hero-heading">Our Passion</h1>
        <p className="hero-text">
          At Mouad Icap, we offer a range of grooming services tailored for the modern individual.
          Our experienced team ensures every cut and treatment is top-tier.
        </p>
        <button className="hero-btn" onClick={serviceScrollTo}>Check our Services</button>
      </div>

      <div className="header-section" >
        <h2 className="page-title" ref={serviceScrollRef}>Our Services</h2>
        <p className="page-subtitle">Precision • Passion • Professionalism</p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-img">
               <img src={service.image} alt={service.title}/>
            </div>
          </div>
        ))}
      </div>
    </div>
<Footer/>
    </>
  
  );
}

export default Services;
