import React from "react";
import { Link } from "react-router-dom";

function DriversPage() {
  return (
    <div className="drivers-page">
      <h1>Drivers</h1>
      <ul>
        <li>
          <Link to="/drivers/driver-for-idm">Driver for IDM EXPRESS</Link>
        </li>
        <li>
          <Link to="/drivers/available-jobs">Available Truck Jobs</Link>
        </li>
      </ul>
    </div>
  );
}

export default DriversPage;
