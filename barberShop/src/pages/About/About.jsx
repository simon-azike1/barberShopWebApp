import React, { useRef } from "react";
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import barber1 from '../../assets/Images/Img-15.png'
import barber2 from '../../assets/Images/Img-14.jpg'
import barber3 from '../../assets/Images/Img-10.jpg'
import './about.css';

const About = () => {
  const teamScrollRef = useRef(null)
  const teamScrollTo = () => {
    if(teamScrollRef.current){
      teamScrollRef.current.scrollIntoView({behavior:'smooth'})
    }
  }
  const teamMembers = [
    {
      id: 1,
      name: "Mouad",
      role: "Master Barber",
      description:
        "15 years of experience crafting perfect cuts and styling modern looks. Specializes in classic gentleman's cuts with a contemporary twist.",
      specialties: ["Classic Cuts", "Beard Styling", "Hot Towel"],
      imageUrl: barber1,
      avatarText: "JS",
    },
    {
      id: 2,
      name: "Mouad",
      role: "Senior Stylist",
      description:
        "Specializes in modern trends and creative styling for the next generation. Award-winning stylist with expertise in color and contemporary cuts.",
      specialties: ["Modern Cuts", "Color", "Styling"],
      imageUrl: barber2,
      avatarText: "MJ",
    },
    {
      id: 3,
      name: "Muhanmad",
      role: "Beard Specialist",
      description:
        "Expert in traditional grooming techniques and premium beard care. Certified in classic barbering with a passion for detailed grooming.",
      specialties: ["Beard Care", "Traditional", "Grooming"],
      imageUrl: barber3,
      avatarText: "AB",
    },
    
  ];

  const values = [
    { icon: "🎯", title: "Integrity", text: "Honest service and transparent pricing. We believe in building trust through consistent quality and genuine care for our clients." },
    { icon: "💪", title: "Confidence", text: "Empowering you to look and feel your best. Every cut is designed to boost your confidence and reflect your unique personality." },
    { icon: "❤️", title: "Care", text: "Attention to detail in every service. From consultation to final styling, we ensure each client receives personalized, thoughtful care." },
    { icon: "🌟", title: "Excellence", text: "Striving for perfection in every cut. We continuously improve our skills and techniques to deliver exceptional results." },
    { icon: "🤝", title: "Community", text: "Building lasting relationships. We're not just a barbershop; we're a cornerstone of the community where everyone feels welcome." },
    { icon: "✨", title: "Innovation", text: "Blending tradition with modern techniques. We honor classic barbering while embracing new trends and technologies." }
  ];

  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-content">

          {/* Story Section */}
          <div className="about-section">
            <div className="section-card">
              <h2 className="section-title">Our Story</h2>
              <p className="section-text">
                Since 2019, Mouad Icap has been more than a grooming spot. It's a legacy of style,
                culture, and community. What began as a small corner shop is now a space of timeless fashion.
                Our journey started with a simple vision: to create a place where tradition meets innovation,
                where every client leaves feeling confident and refreshed. <br />
                <button onClick={teamScrollTo} className="value-btn"> Our Core Values</button>
              </p>

            </div>
          </div>

          {/* Team Section */}
          <div className="about-section" >
            <div className="section-card">
              <h2 className="section-title">Meet the Team</h2>
              <p className="section-text">
                Our expert barbers blend tradition with trend. Each cut is a craft, and each barber brings
                personality and precision to your look.
              </p>
              
              <div className="team-grid">
                {teamMembers.map(member => (
                  <div className="team-card" key={member.id}>
                    <div className="team-image-container">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="team-image"
                        onError={e => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="team-avatar" style={{ display: 'none' }}>
                        {member.avatarText}
                      </div>
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                      <p className="team-description">{member.description}</p>
                      <div className="team-specialties">
                        {member.specialties.map((spec, i) => (
                          <span className="specialty-tag" key={i}>{spec}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="about-section" ref={teamScrollRef} >
            <div className="section-card">
              <h2 className="section-title">Our Values</h2>
              <p className="section-text">
                We believe in more than grooming. We stand for integrity, confidence, and care—every haircut,
                every time.
              </p>

              <div className="values-grid">
                {values.map((value, index) => (
                  <div className="value-item" key={index}>
                    <div className="value-icon">{value.icon}</div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-text">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
