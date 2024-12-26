import React from "react";
import "./TrailDetails.css";

function TrailDetails() {
  return (
    <div className="trail-details">
      {/* Header */}
      <div className="trail-header">
        <div className="trail-header-overlay">
          <h1>Edge of the World Trail</h1>
          <p>Experience breathtaking desert cliffs with panoramic views</p>
        </div>
      </div>

      {/* Content */}
      <div className="trail-content">
        <div>
          {/* Overview */}
          <div className="overview-card">
            <h2>Trail Overview</h2>
            <div className="overview-list">
              <div className="overview-item">
                <i className="fas fa-flag"></i>
                <span>Difficulty: Moderate</span>
              </div>
              <div className="overview-item">
                <i className="fas fa-clock"></i>
                <span>Duration: 4-6 hours</span>
              </div>
              <div className="overview-item">
                <i className="fas fa-route"></i>
                <span>Distance: 15 km round trip</span>
              </div>
              <div className="overview-item">
                <i className="fas fa-calendar"></i>
                <span>Best Time: Nov - Mar</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="features-card">
            <h2>Features</h2>
            <div className="features-list">
              <span>Parking Available</span>
              <span>Rest Areas</span>
              <span>Guided Tours</span>
            </div>
          </div>

          {/* Reviews */}
          <div className="reviews-card">
            <h2>Reviews</h2>
            <div className="review">
              <img src="profile-placeholder.jpg" alt="User" />
              <div className="review-details">
                <span>Ahmed S.</span>
                <p>
                  Amazing trail with breathtaking views. The guide was very
                  knowledgeable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking */}
        <div className="book-card">
          <h2>Book Your Trail</h2>
          <form>
            <label>Select Date</label>
            <input type="date" />

            <label>Group Size</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>

            <label>Tour Type</label>
            <select>
              <option>Standard</option>
              <option>Guided</option>
            </select>

            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Rasha. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TrailDetails;
