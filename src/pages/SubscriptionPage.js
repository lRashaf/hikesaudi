import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubscriptionPage.css';

function SubscriptionPage() {
  const navigate = useNavigate();

  // وظيفة التنقل لصفحة الدفع مع إرسال الخطة المحددة
  const handleChoosePlan = (plan) => {
    navigate('/checkout', { state: { plan } });
  };

  return (
    <div className="subscription-container">
      {/* Hero Section */}
      <div className="subscription-hero-section">
        <h1>Unlock Exclusive Trails and Benefits!</h1>
        <p>Join our community of adventurers exploring the hidden gems of Saudi Arabia</p>
      </div>

      {/* Plans Section */}
      <div className="plans">
        <div className="plan-card">
          <h3>Basic</h3>
          <p className="price">$9.99<span>/month</span></p>
          <ul>
            <li>✅ Access to basic trails</li>
            <li>✅ Community forum access</li>
            <li>✅ Basic maps download</li>
          </ul>
          <button onClick={() => handleChoosePlan('Basic')}>Choose Plan</button>
        </div>
        <div className="plan-card pro">
          <h3>Pro</h3>
          <p className="price">$19.99<span>/month</span></p>
          <ul>
            <li>✅ Access to all trails</li>
            <li>✅ GPS tracking</li>
            <li>✅ Offline maps</li>
            <li>✅ Group activities</li>
          </ul>
          <button onClick={() => handleChoosePlan('Pro')}>Choose Plan</button>
        </div>
        <div className="plan-card">
          <h3>Expert</h3>
          <p className="price">$29.99<span>/month</span></p>
          <ul>
            <li>✅ All Pro features</li>
            <li>✅ Guided tours</li>
            <li>✅ Emergency support</li>
            <li>✅ Equipment rental</li>
          </ul>
          <button onClick={() => handleChoosePlan('Expert')}>Choose Plan</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>Can I cancel my subscription anytime?</h4>
          <p>Yes, you can cancel your subscription at any time. No questions asked.</p>
        </div>
        <div className="faq-item">
          <h4>What's included in the trail maps?</h4>
          <p>Our trail maps include elevation profiles, waypoints, and detailed route information.</p>
        </div>
        <div className="faq-item">
          <h4>How often are new trails added?</h4>
          <p>We add new trails monthly, ensuring fresh adventures for our community.</p>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;
