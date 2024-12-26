import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // إضافة Link للتنقل
import Home from './pages/Home'; // الصفحة الرئيسية
import ExploreTrails from './pages/ExploreTrails'; // صفحة Explore Trails
import TrailDetails from './pages/TrailDetails';
import SubscriptionPage from './pages/SubscriptionPage';
import ContactUs from './pages/ContactUs'; // تأكد من مسار الاستيراد الصحيح
import About from './pages/About';

import './App.css'; // Custom CSS for styling
import heroImage from './assets/images/hero.jpg';
import trailImage1 from './assets/images/trailImage1.jpg';
import trailImage2 from './assets/images/hero.jpg';
import trailImage3 from './assets/images/p2.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <nav className="navbar">
            <div className="logo">HikeSaudi</div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore-trails">Trails</Link></li>
              <li><Link to="/subscription">Subscription</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact us</Link></li>

              </ul>
            <div className="auth-buttons">
              <button className="sign-in">Sign In</button>
              <button className="join-now">Join Now</button>
            </div>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section className="hero">
                  <video className="hero-video" autoPlay muted loop>
                  <source src={process.env.PUBLIC_URL + "/videos/backgriund2.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                  </video>
                  <div className="hero-content">
                    <h1>Explore Saudi Hikes</h1>
                    <p>Discover. Explore. Connect.</p>
                    <div className="hero-buttons">
                      <Link to="/explore-trails">
                        <button className="explore">Explore Trails</button>
                      </Link>
                      <button className="watch-guide">Watch Guide</button>
                    </div>
                  </div>
                </section>

                {/* Popular Trails Section */}
                <section className="popular-trails">
                  <h2>Popular Hiking Trails</h2>
                  <div className="trail-cards">
                    <div className="trail-card">
                      <img src={trailImage1} alt="Jabal Al-Lawz" />
                      <h3>Jabal Al-Lawz</h3>
                      <p>Tabuk Region</p>
                      <p>4-6 hours · Moderate</p>
                    </div>
                    <div className="trail-card">
                      <img src={trailImage2} alt="Edge of the World" />
                      <h3>Edge of the World</h3>
                      <p>Riyadh Region</p>
                      <p>3-4 hours · Easy</p>
                    </div>
                    <div className="trail-card">
                      <img src={trailImage3} alt="Al-Souda Mountains" />
                      <h3>Al-Shafa Mountains</h3>
                      <p>Taif Region</p>
                      <p>5-7 hours · Difficult</p>
                    </div>
                  </div>
                </section>

                {/* Subscription Plans Section */}
                <section className="subscription-plans">
                  <h2>Choose Your Adventure Plan</h2>
                  <div className="plans">
                    <div className="plan">
                      <h3>Basic</h3>
                      <p>$9.99/month</p>
                      <ul>
                        <li>Access to basic trails</li>
                        <li>Community forum access</li>
                        <li>Basic maps download</li>
                      </ul>
                      <button>Choose Plan</button>
                    </div>
                    <div className="plan">
                      <h3>Pro</h3>
                      <p>$19.99/month</p>
                      <ul>
                        <li>Access to all trails</li>
                        <li>GPS tracking</li>
                        <li>Offline maps</li>
                        <li>Group activities</li>
                      </ul>
                      <button>Choose Plan</button>
                    </div>
                    <div className="plan">
                      <h3>Expert</h3>
                      <p>$29.99/month</p>
                      <ul>
                        <li>All Pro features</li>
                        <li>Guided tours</li>
                        <li>Emergency support</li>
                        <li>Equipment rental</li>
                      </ul>
                      <button>Choose Plan</button>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/explore-trails" element={<ExploreTrails />} />

          {/* صفحة Trail Details */}
          <Route path="/trail-details/:id" element={<TrailDetails />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/trail-details/:id" element={<TrailDetails />} />

          <Route path="/contact" element={<ContactUs />} />
          
        </Routes>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            {/* Adjusted Footer Logo Section */}
            <div className="footer-logo">
              <h2>HikeSaudi</h2>
              <p>
                Discover the beauty of Saudi Arabia's landscapes one trail at a
                time.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Trails</li>
                <li>Plans</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="social-media">
              <h4>Follow Us</h4>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="newsletter">
              <h4>Newsletter</h4>
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-bottom">© 2024 Rasha. All rights reserved.</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
