import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import './contact.css';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    message: ""
  });
  const formRef = useRef();

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleChange = (e) => { 
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4bksq8k",    
      "template_njj631a",  
      "xL6_CntdprOU1DvCJ"  
    )
    .then(() => {
      alert("Message sent successfully!");
      formRef.current.reset();
      setFormData({ name: "", email: "", phone: "", time: "", message: "" });
      setStep(1);  
    })
    .catch(() => alert("Failed to send message. Please try again."));
  };

  return (
    <>
      <Header />
      <div className="contact-page">
        <section className="hero-section-2">
          <h1 className="hero-heading">Get In Touch</h1>
          <div className="hero-text">
            We're here to help! Reach out for appointments, questions, or just to say hi.
          </div>
        </section>

        <section className="form-section">
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            {/* Step 1 */}
            {step === 1 && (
              <>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  id="name"
                  placeholder="Your full name please"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={nextStep}
                  className="submit-btn"
                >
                  Next
                </button>
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <label htmlFor="time">Preferred Time</label>
                <input
                  type="text"
                  name="time"
                  id="time"
                  placeholder="e.g. 3:00 PM on Monday"
                  value={formData.time}
                  onChange={handleChange}
                />

                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="submit-btn"
                    style={{ flex: 1 }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="submit-btn"
                    style={{ flex: 1 }}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="submit-btn"
                    style={{ flex: 1 }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="submit-btn"
                    style={{ flex: 1 }}
                    onClick={sendEmail}
                  >
                    Send Message
                  </button>
                </div>
              </>
            )}
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
