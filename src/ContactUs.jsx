import React, { useState } from "react";
import Footer from "./Footer.jsx";
import "./NavBar.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false); // new state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true); // show thank-you message
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page" style={{ minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ textAlign: "center", color: "#3B2F2F" }}>Contact Us</h1>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "10px auto 40px auto" }}>
        Have questions or feedback? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      {!submitted ? (
        <form 
          onSubmit={handleSubmit} 
          style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={{ padding: "10px", fontSize: "1rem" }}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ padding: "10px", fontSize: "1rem" }}
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows="6"
            style={{ padding: "10px", fontSize: "1rem" }}
          />
          <button 
            type="submit" 
            style={{
              padding: "12px", 
              fontSize: "1.1rem", 
              backgroundColor: "#3B2F2F", 
              color: "#fff", 
              border: "none", 
              borderRadius: "8px", 
              cursor: "pointer"
            }}
          >
            Send Message
          </button>
        </form>
      ) : (
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#3B2F2F", marginTop: "20px" }}>
          Thank you for contacting us!
        </p>
      )}

      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
}