import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/v1">Go to V1</Link>
          </li>
          <li>
            <Link to="/v2">Go to V2</Link>
          </li>
          <li>
            <Link to="/v3">Go to V3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
