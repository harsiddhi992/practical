import React from "react";
import { Link } from 'react-router-dom';

import "../Components/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="home_item">
        <Link to="/">Home</Link>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <Link to="/product">Products</Link>
        </div>
        <div className="grid-item">
          <Link to="/category">Manage Category</Link>
        </div>
        <div className="grid-item">
          <Link to="/company">Manage Company</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
