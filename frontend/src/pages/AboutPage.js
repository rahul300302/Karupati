import React from "react";

function AboutPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Palm Karupatti is a leading producer of organic jaggery, offering
        premium quality, natural, and healthy products.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9fafb", // Light background color
    margin: "0 auto",
    maxWidth: "800px", // Centers content and limits width
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow for depth
  },
  heading: {
    fontSize: "2.5rem", // Large font size for the heading
    fontWeight: "600", // Semi-bold
    color: "#2d3748", // Dark gray text
    marginBottom: "16px", // Adds space below the heading
  },
  paragraph: {
    fontSize: "1.125rem", // Slightly larger font size for readability
    lineHeight: "1.75", // Improves readability with more space between lines
    color: "#4a5568", // Light gray text
    marginBottom: "16px", // Space at the bottom
    textAlign: "justify", // Justifies the paragraph text
  },
};

export default AboutPage;
