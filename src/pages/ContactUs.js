import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      {/* Header */}
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions about hiking in Saudi Arabia? We're here to help!</p>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Your name" />

            <label>Email Address</label>
            <input type="email" placeholder="your@email.com" />

            <label>Subject</label>
            <input type="text" placeholder="How can we help?" />

            <label>Message</label>
            <textarea placeholder="Your message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> King Fahd Road, Riyadh, Saudi Arabia
          </p>
          <p>
            <i className="fas fa-phone"></i> +966 12 345 6789
          </p>
          <p>
            <i className="fas fa-envelope"></i> contact@hikesa.com
          </p>

          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 HikeSA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
