import React from "react";
import Header from '../../layout/Header/Header'
import Footer from "../../layout/Footer/Footer";
import {Link} from 'react-router-dom'
import './blog.css'


const Blog = () => {
   const blogPosts = [
    {
      title: 'Top 5 Haircut Styles for 2025',
      excerpt: 'From classic fades to modern textured crops, discover the most popular haircut trends.',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
    },
    {
      title: 'Beard Grooming Tips Every Man Should Know',
      excerpt: 'Master the art of beard care with these essential grooming practices.',
      image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
    },
    {
      title: 'How to Maintain Healthy Hair',
      excerpt: 'Learn expert tips on washing, trimming, and moisturizing for strong, healthy hair.',
      image: 'https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg',
    },
  ];

  return (
    <>
      <Header />
      <div className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <h1 className="hero-heading">Our Blog</h1>
          <p className="hero-text">
            Welcome to the heart of FlowBarb, where grooming meets lifestyle. Discover expert tips,
            inspirational transformations, industry insights, and stories that shape the modern barbering experience.
          </p>
        
       <Link to='/about'   >

       <button className="hero-btn">Explore Articles</button>
       </Link>

        </section>

        {/* Blog Cards */}
        <section className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card fade-in" key={index}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}


export default Blog;