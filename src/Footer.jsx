import React from "react";

export default function Footer() {
  const footerStyle = {
    padding: "2px 40px",
    borderTop: "1px solid #ddd",
    textAlign: "left",
    color: "#2C3E50",
  };

  const textStyle = {
    margin: "5px 0",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p style={textStyle}>&copy; 2025 Minnow. All rights reserved.</p>
        <p style={textStyle}>Empowering students with accessible, engaging, and inclusive learning experiences.</p>
      </div>
    </footer>
  );
}
