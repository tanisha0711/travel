import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero text-white text-center d-flex align-items-center justify-content-center">
        <div className="hero-content">
          <h1 className="display-4 fw-bold">Explore the World with Us</h1>
          <p className="lead">Discover beautiful destinations and create unforgettable memories.</p>
          <a href="/destinations" className="btn btn-success btn-lg mt-3">
            Explore Destinations
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="feature-icon mb-3">
              <i className="bi bi-globe text-success display-4"></i>
            </div>
            <h4>Worldwide Destinations</h4>
            <p>From tropical beaches to snowy mountains, we cover all the stunning destinations.</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-icon mb-3">
              <i className="bi bi-people text-success display-4"></i>
            </div>
            <h4>Experienced Guides</h4>
            <p>Our expert guides ensure a safe, enjoyable, and enriching travel experience.</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-icon mb-3">
              <i className="bi bi-wallet2 text-success display-4"></i>
            </div>
            <h4>Affordable Packages</h4>
            <p>Travel without breaking the bank with our budget-friendly packages.</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery mt-5">
        <h2 className="text-center mb-4">Gallery</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/images/gallery-01.jpg" alt="Gallery 1" className="img-fluid mb-4" />
            </div>
            <div className="col-md-4">
              <img src="/images/gallery-05.jpg" alt="Gallery 2" className="img-fluid mb-4" />
            </div>
            <div className="col-md-4">
              <img src="/images/gallery-03.jpg" alt="Gallery 3" className="img-fluid mb-4" />
            </div>
            <div className="col-md-4">
              <img src="/images/gallery-04.jpg" alt="Gallery 4" className="img-fluid mb-4" />
            </div>
            <div className="col-md-4">
              <img src="/images/gallery-02.jpg" alt="Gallery 5" className="img-fluid mb-4" />
            </div>
            <div className="col-md-4">
              <img src="/images/gallery-06.jpg" alt="Gallery 6" className="img-fluid mb-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"The trip was amazing! Everything was well-organized. Great Work!!"</p>
                <h5>- Raman W.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"Traveling with this agency was the best decision. Their guides are knowledgeable and friendly."</p>
                <h5>- Shriya T.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>"Affordable prices and excellent service. I can't wait to plan my next vacation with them!"</p>
                <h5>- Ally S.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>We are passionate about making your travel dreams come true. Explore the world with us!</p>
            </div>
            <div className="col-md-4 quick-links">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-decoration-none">Home</a></li>
                <li><a href="/destinations" className="text-decoration-none">Destinations</a></li>
                <li><a href="/about" className="text-decoration-none">About</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
          <hr />
          <p className="text-center mb-0">&copy; 2024 Roamify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;