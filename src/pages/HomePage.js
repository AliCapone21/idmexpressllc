import React, { useEffect, useState } from "react";

function HomePage() {
  const [isLogoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 500); // Delay for logo animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <div className="background-video">
        <video autoPlay muted loop>
          <source src="/truck-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`logo-container ${isLogoVisible ? "fade-in" : ""}`}>
        <img src="/logo.png" alt="IDM Express LLC" />
      </div>
      <div className="cta-buttons">
        <button className="cta-button">Get a Quote</button>
        <button className="cta-button">Contact Us</button>
      </div>
    </div>
  );
}

export default HomePage;
