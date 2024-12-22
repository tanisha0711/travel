import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Back to Home Button */}
        <div className="back-button mt-3">
          <Link to="/" className="btn btn-outline-secondary">
            &larr; Back to Home
          </Link>
        </div>
        <h1>About Us</h1>
        <div className="row">
          <div className="col-md-6">
            <p>
              Welcome to our travel website! We are passionate about exploring the world and sharing
              the best travel destinations with you. Our goal is to inspire and guide you to
              discover amazing places, plan unforgettable trips, and create lasting memories.
            </p>
            <p>
              Our team consists of experienced travel enthusiasts and professionals who understand
              the essence of a perfect journey. We work hard to curate travel guides, tips, and
              packages tailored to your unique interests and preferences.
            </p>
            <p>
              From bustling cities and historic landmarks to serene beaches and breathtaking
              mountains, we offer a variety of options to suit every traveler. Your dream vacation
              is just a few clicks away.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/images/aboutus.jpeg"
              alt="About Us"
              className="about-image img-fluid"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src="/images/about2.jpg"
              alt="Image 1"
              className="about-image img-fluid"
            />
          </div>
          <div className="col-md-4">
            <img
              src="/images/about3.jpg"
              alt="Image 2"
              className="about-image img-fluid"
            />
          </div>
          <div className="col-md-4">
            <img
              src="/images/about4.jpeg"
              alt="Image 3"
              className="about-image img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;