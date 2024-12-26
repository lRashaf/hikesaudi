import React, { useState } from 'react';
import './ExploreTrails.css';
import { Link } from 'react-router-dom';

import trailImage1 from '../assets/images/photo 1.jpg';
import trailImage2 from '../assets/images/photo 2.jpg';
import trailImage3 from '../assets/images/photo 3.jpg';

function ExploreTrails() {
  const [page, setPage] = useState(1);

  const trails = {
    1: [
      { id: 1, title: 'Al-Shafa Trail', image: trailImage1, difficulty: 'Easy' },
      { id: 2, title: 'Edge of the World', image: trailImage2, difficulty: 'Moderate' },
      { id: 3, title: 'Asir Mountains', image: trailImage3, difficulty: 'Difficult' },
    ],
    2: [
      { id: 4, title: 'Mount Sawda', image: trailImage2, difficulty: 'Easy' },
      { id: 5, title: 'AlUla Mountain Trail', image: trailImage3, difficulty: 'Difficult' },
      { id: 6, title: 'Rijal Alma’a Trail', image: trailImage1, difficulty: 'Moderate' },
    ],
    3: [
      { id: 7, title: 'Hidden Oasis', image: trailImage1, difficulty: 'Moderate' },
      { id: 8, title: 'Desert Peak', image: trailImage2, difficulty: 'Difficult' },
      { id: 9, title: 'Valley Walk', image: trailImage3, difficulty: 'Easy' },
    ],
  };

  const nextPage = () => setPage((prev) => (prev < 3 ? prev + 1 : prev));
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="explore-trails">
      {/* Hero Section */}
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop>
        <source src={process.env.PUBLIC_URL + "/videos/bgp1.mp4"} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Saudi Arabia's Hidden Trails</h1>
          <p>Experience breathtaking landscapes through guided hikes.</p>
        </div>
      </section>

      {/* Trails */}
      <section className="popular-trails">
        <h2>Popular Hiking Trails</h2>
        <div className="trail-cards">
          {trails[page].map((trail) => (
            <div key={trail.id} className="trail-card">
              <img src={trail.image} alt={trail.title} />
              <h3>{trail.title}</h3>
              <p>{trail.difficulty}</p>
              <Link to={`/trail-details/${trail.id}`} state={{ trail }}>
  <button>View Details</button>
</Link>

            </div>
          ))}
        </div>

        {/* Pagination with Arrows */}
        <div className="pagination">
          <button onClick={prevPage} disabled={page === 1}>
            ← Prev
          </button>
          <button onClick={() => setPage(1)} className={page === 1 ? 'active' : ''}>
            1
          </button>
          <button onClick={() => setPage(2)} className={page === 2 ? 'active' : ''}>
            2
          </button>
          <button onClick={() => setPage(3)} className={page === 3 ? 'active' : ''}>
            3
          </button>
          <button onClick={nextPage} disabled={page === 3}>
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}

export default ExploreTrails;
