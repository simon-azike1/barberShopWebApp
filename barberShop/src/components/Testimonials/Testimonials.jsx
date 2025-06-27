import React, { useRef, useState } from "react";
import images from '@/assets/Images/custmer-1.jpg';
import images4 from '@/assets/Images/Img-4.jpg';
import images3 from '@/assets/Images/Img-3.jpg';
import './testimonials.css';

const testimonialData = [
  {
    id: 1,
    name: 'Simon',
    role: 'My best Barber in Morocco',
    content: 'Best barber shop in town! The team at Barber shop delivers exceptional service every time.',
    image: images
  },
  {
    id: 2,
    name: 'John',
    role: 'Regular Customer',
    content: 'Amazing cuts and great atmosphere. Highly recommend this place!',
    image: images3
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Business Owner',
    content: 'Professional service and skilled barbers. Always leave satisfied!',
    image: images4
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? testimonialData.length - 1 : prev - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => prev === testimonialData.length - 1 ? 0 : prev + 1);
  };

const testimonialbtnRef = useRef(null)

const  scrollToTestimonial = () => {
    testimonialbtnRef.current?.scrollIntoView({behavior:"smooth"})
}
  return (
    <section className="testimonials-section" ref={testimonialbtnRef}>
      <button className="btn-testimonials" onClick={scrollToTestimonial}>View Testimonials</button>

      <header className="heading-testimonials">
        <h2>What Our Clients Are Saying About Us</h2>
        <p>
          Our expert barbers specialize in classic, modern, and custom cuts for all hair types and textures.
          Whether it's a timeless style or the latest trend, we ensure you leave looking your best.
        </p>
      </header>

      {/* Grid Section */}
      <div className="testimonial-grid">
        {testimonialData.map((t) => (
          <div key={t.id} className="testimonial-card">
            <img src={t.image} alt={t.name} className="testimonial-avatar" />
            <div className="testimonial-text">
              <p>"{t.content}"</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
