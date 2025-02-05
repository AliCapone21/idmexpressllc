import React from "react";
import { Link } from "react-router-dom";

function CompanyPage() {
  return (
    <div className="company-page">
      <h1>About IDM Express LLC</h1>
      <ul>
        <li>
          <Link to="/company/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/company/news">News</Link>
        </li>
        <li>
          <Link to="/company/careers">Careers</Link>
        </li>
      </ul>
    </div>
  );
}

export default CompanyPage;
