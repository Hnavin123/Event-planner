// src/components/common/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#f1f1f1",
      padding: "1rem",
      textAlign: "center",
      marginTop: "auto"
    }}>
      <p>&copy; {new Date().getFullYear()} EventPlanner. All rights reserved.</p>
      <div style={{ marginTop: "0.5rem" }}>
        <a href="/contact" style={{ margin: "0 1rem" }}>Contact</a>
        <a href="/privacy-policy" style={{ margin: "0 1rem" }}>Privacy Policy</a>
        <a href="/terms" style={{ margin: "0 1rem" }}>Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;

