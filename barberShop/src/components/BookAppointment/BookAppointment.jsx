import React, { useState } from "react";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import "./bookappointment.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment submitted:", formData);
    alert("Appointment submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      notes: "",
    });
  };

  return (
    <>
    <Header/>
     <div className="appointment-container">
      <h1>Book an Appointment</h1>
      <p className="subtitle">
        Let us know your preferred time and service. We’ll confirm shortly.
      </p>

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input name="name" id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <select name="time" id="time" value={formData.time} onChange={handleChange} required>
            <option value="">-- Select Time --</option>
            <option>09:00 AM – 10:00 AM</option>
            <option>10:00 AM – 11:00 AM</option>
            <option>11:00 AM – 12:00 PM</option>
            <option>01:00 PM – 02:00 PM</option>
            <option>02:00 PM – 03:00 PM</option>
            <option>03:00 PM – 04:00 PM</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="service">Service</label>
          <select name="service" id="service" value={formData.service} onChange={handleChange} required>
            <option value="">-- Choose a Service --</option>
            <option>Haircut</option>
            <option>Beard Trim</option>
            <option>Haircut + Beard Combo</option>
            <option>Kids' Cut</option>
            <option>Hair Coloring</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            name="notes"
            id="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Mention anything important…"
          />
        </div>

        <button type="submit" className="submit-btn">Submit Appointment</button>
      </form>
    </div>
    <Footer/>
    </>
  
  );
};

export default Appointment;
