import React from 'react';
import './privacy.css';

const Privacy = () => {
  return (
    <div id='privacy' className="privacy-container">
      <h1 className="privacy-header">Privacy Policy</h1>
      
      <div className="privacy-section">
        <p className="intro-text">Introduction</p>
        <p>This Privacy Policy governs your use of our website and services. By accessing or using our services, you agree to be bound by the terms of this privacy policy. If you do not wish to agree to these Policy terms, you are prohibited from further access to or use of our services.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
        <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system. Email marketing: With your permission, we may send you emails about our store, new products and other updates.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 2 - CONSENT</h2>
        <p>How do you get my consent?</p>
        <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
        <p>How do I withdraw my consent?</p>
        <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at <span className="privacy-link">info@yourcompany.com</span> or mailing us at: 123, 456 Main Street, Anyplace, Anywhere 12345, USA.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 3 - DISCLOSURE</h2>
        <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 4 - PAYMENT</h2>
        <p>We use Shopify for processing payments. Shopify does not store your card data. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved. Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. For more information, you can read <span className="privacy-link">Terms of Service of Shopify</span>.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 5 - THIRD-PARTY SERVICES</h2>
        <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located. Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service. Links: When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 6 - SECURITY</h2>
        <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 7 - COOKIES</h2>
        <p>We use cookies to maintain session of your user. It is not used to personally identify you on other websites.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 8 - AGE OF CONSENT</h2>
        <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">SECTION 9 - CHANGES TO THIS PRIVACY POLICY</h2>
        <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
      </div>

      <div className="privacy-section">
        <h2 className="section-title">QUESTIONS AND CONTACT INFORMATION</h2>
        <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <span>team@chaicode.com</span> or by mail at 507, AB Nirman nagar, Ajmer Road, Jaipur, Rajasthan 302019, India</p>
      </div>
    </div>
  );
};

export default Privacy;