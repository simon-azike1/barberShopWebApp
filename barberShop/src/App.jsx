import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '@/pages/Home Page/Hero';
import Header from '@/layout/Header/Header';
import Preview from '@/pages/About/AboutPreview';
import Footer from '@/layout/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import About from '@/pages/About/About';
import Services from '@/pages/Services/Services';
import Contact from '@/pages/Contact/Contact';
import Blog from '@/pages/BlogPage/Blog';
import BookAppointment from '@/components/BookAppointment/BookAppointment';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Preview />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/service" element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/book' element={<BookAppointment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
