import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Pricing Policy</h1>
      
      <div className="pricing-intro">
        <p>At Chai Code, transparency, fairness, and customer satisfaction are central to our pricing structure. This Pricing Policy outlines the terms related to pricing, payments, discounts, and related matters associated with our services and offerings.</p>
      </div>

      <div className="pricing-section">
        <h2 className="section-title">1. Customized Pricing</h2>
        <p>We offer personalized pricing based on the scope, complexity, and outcomes of the services requested. Each service quote is shared with you in advance, reflecting the time, effort, and quality involved. Typically, our pricing ranges from INR 500 to INR 14,000 depending on the nature of the service.</p>
      </div>

      <div className="pricing-section">
        <h2 className="section-title">2. Payment Schedule</h2>
        <p>Certain services are available on a subscription or time-bound basis. The duration for such services varies from 1 month to 1 year, as clearly mentioned in the service description. All payments must be made upfront unless otherwise specified in the agreement.</p>
      </div>

      <div className="pricing-section">
        <h2 className="section-title">3. Price Matching</h2>
        <p>We are committed to offering competitive pricing. If you find a similar product or service (matching in specifications, color, and size) at a lower price from a comparable retailer, we will do our best to match that price.</p>
        <p className="note">Note: We do not match prices from auction sites, outlet stores, or websites offering discount coupons, promotional pricing, shipping offers, or gift card incentives.</p>
      </div>

      <div className="pricing-section">
        <h2 className="section-title">4. Sale Adjustments</h2>
        <p>If an item or service you have purchased is reduced in price within 14 days of your purchase, you are eligible for a one-time price adjustment. To request a sale adjustment, please contact our support team with your order details. Our Platform run sales offer time to time and such offers are not eligible for further adjustments.</p>
        <p className="note">Note: Designer services or items bought on sale are not eligible for further adjustments. Discounted offers on other platforms are not applicable.</p>
      </div>

      <div className="pricing-section">
        <h2 className="section-title">5. Pricing Errors</h2>
        <p>While we strive for complete accuracy, inadvertent pricing errors may occur. If a product or service is listed at an incorrect price, we reserve the right to cancel the order and notify you of the error. If the correct price is higher than what was displayed, you may choose to proceed with the updated amount or cancel your order without penalty.</p>
      </div>

      <div className="pricing-section">
        <h2 className="section-title">6. Shopping Cart Policy</h2>
        <p>Prices displayed in your shopping cart reflect the most recent pricing from the product or service page. This price may differ from the one shown when you initially added the item. All offerings are intended for personal use only. We reserve the right to refuse orders that appear to be intended for resale.</p>
      </div>

      <div className="pricing-section">
        <p>If you have any questions or need further assistance, please reach out to our Customer Service Team at <a href="mailto:team@chaicode.com" className="contact-email">team@chaicode.com</a> — available 24/7 to support you.</p>
      </div>
    </div>
  );
};

export default Pricing;