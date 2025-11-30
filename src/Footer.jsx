import React from "react";

export default function Footer() {
  const footerStyle = {
    textAlign: "left",      // align text to the left
    padding: "20px 40px",
    background: "#00008b",
    marginTop: "40px",
    color: "white",
  };

  const textStyle = {
    margin: "5px 0",
    color: "#f8f8f8",
  };

  const linkStyle = {
    color: "#f8f8f8",
    textDecoration: "none",
  };

  return (
    <footer style={footerStyle}>
      <hr />
      <p style={textStyle}><strong>Minnow</strong></p>
      <p style={textStyle}>Norfolk, Virginia</p>
      <p style={textStyle}>
        Email: <a href="mailto:info@minnow.com" style={linkStyle}>info@minnow.com</a>
        &nbsp;|&nbsp;
        Phone: +1 (000) 000-0000
      </p>
      <p style={textStyle}>Images: Wikimedia Commons (attribution where used).</p>
      <p style={textStyle}>Website by Team Crystal.</p>
      <p style={textStyle}>&copy; 2025 Minnow. All rights reserved.</p>
    </footer>
  );
}