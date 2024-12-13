import React, { useState } from 'react';
import { submitContactForm } from '../services/api';
import '../index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await submitContactForm(formData);
      setStatus('Message sent successfully!');
      console.log(response); // Log response from the API
    } catch (error) {
      setStatus('Failed to send message.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-container">
      <h2>GET IN TOUCH WITH ME</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {status && <p className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
    </div>
  );
};

export default Contact;
