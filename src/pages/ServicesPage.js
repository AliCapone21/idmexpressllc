import React from "react";
import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <ul>
        <li>
          <Link to="/services/logistics">Logistics</Link>
        </li>
        <li>
          <Link to="/services/get-quote">Get a Quote</Link>
        </li>
      </ul>
    </div>
  );
}

export default ServicesPage;
