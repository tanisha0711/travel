import React from 'react';
import './Destinations.css';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const destinations = [
    { name: 'Mumbai, India', description: 'A land of vibrant culture and history.', image: '/images/india.jpeg', price: 25000 },
    { name: 'Kyoto, Japan', description: 'Rich in culture, tradition and heritage.', image: '/images/kyoto.jpeg', price: 40000 },
    { name: 'Cape Town, South Africa', description: 'Breathtaking landscapes.', image: '/images/cape town.jpeg', price: 35000 },
    { name: 'New York, USA', description: 'The city that never sleeps.', image: '/images/new york.jpeg', price: 75000 },
    { name: 'Sydney, Australia', description: 'Home to the iconic Opera House.', image: '/images/sydney.jpeg', price: 65000 },
    { name: 'Paris, France', description: 'City of Light and love.', image: '/images/paris.jpeg', price: 55000 },
  ];

  return (
    <div className="destinations">
      {/* Back Button */}
      <div className="back-button mt-3">
        <Link to="/" className="btn btn-outline-secondary">
          &larr; Back to Home
        </Link>
      </div>
      <h1>Destinations</h1>
      <div className="destination-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <p className="price">Price: ₹{destination.price}</p>
            <button className="book-now">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;