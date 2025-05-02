import React from 'react';
import './refund.css';

const Refund = () => {
  return (
    <div className="refund-container">
      <h1 className="refund-title">Refund Policy</h1>
      
      <div className="refund-intro">
        <p>At Chai Code, we strive to deliver the highest quality online learning experiences. Please read our refund policy carefully before making a purchase.</p>
      </div>

      <div className="refund-section">
        <h2 className="section-title">1. Digital Course Purchases – No Refund Policy</h2>
        <p className="section-content">All our courses are digital products and are non-refundable. Once a course has been purchased, we do not offer refunds under any circumstances unless explicitly mentioned.</p>
        <p className="section-content">To help you make an informed decision:</p>
        <ul>
          <li>Most courses offer free sample videos for preview.</li>
          <li>You can also explore our content on YouTube to assess the teaching style and course quality before purchasing.</li>
        </ul>
      </div>

      <div className="refund-section">
        <h2 className="section-title">2. Course/Batches Cancellation by Chai Code</h2>
        <p className="section-content">In the rare event that a course or scheduled batch is cancelled by Chai Code and we are unable to deliver the promised service, a 100% refund will be issued to the original payment method.</p>
      </div>

      <div className="refund-section">
        <h2 className="section-title">3. No Refunds on Sale or Discounted Courses</h2>
        <p className="section-content">Courses purchased at a discounted price or during special sales are not eligible for refunds under any condition.</p>
      </div>

      <div className="refund-section">
        <h2 className="section-title">4. No Exchanges</h2>
        <p className="section-content">Each course is a self-contained digital property. Therefore, we do not allow exchanges between courses or upgrades after purchase.</p>
      </div>

      <div className="refund-section">
        <h2 className="section-title">5. Gifting Courses</h2>
        <p className="section-content">Currently, we do not support gifting of courses. All purchases are for individual use only.</p>
      </div>

      <div className="refund-section">
        <h2 className="section-title">6. No Physical Shipping</h2>
        <p className="section-content">All our offerings are delivered digitally through our website. We do not ship physical copies like CDs or DVDs.</p>
      </div>

      <div className="refund-section">
        <h2 className="section-title">7. Need Help?</h2>
        <p className="section-content">If you believe there has been an error in your purchase or if you face any issues accessing your course, feel free to contact our support team:</p>
        <p>
          
          <a href="mailto:team@chaicode.com" className="contact-email">team@chaicode.com</a>
        </p>
      </div>
    </div>
  );
};

export default Refund;