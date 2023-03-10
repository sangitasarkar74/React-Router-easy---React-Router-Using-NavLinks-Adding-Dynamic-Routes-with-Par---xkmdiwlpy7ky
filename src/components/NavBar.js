import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="index-link">
            Index Page
          </Link>
        </li>
        <li>
          <Link to="/home" className="home-link">
            Home Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};
