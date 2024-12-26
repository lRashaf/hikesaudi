import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <header className="header">
        <h1>Discover Saudi Hikes</h1>
        <Link to="/explore-trails">
          <button className="explore">Explore Trails</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
