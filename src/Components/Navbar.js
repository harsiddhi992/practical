import React from "react";
import { Link } from "react-router-dom";

import "../Components/Navbar.css";
const Navbar = () => {
  return (
    <>
      {/* <nav class="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
          <Link to="/">Home</Link>
        </div>
      </nav> */}
      <div className="home_item">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <button className="btn btn-suceess">
            <Link to="/register">Register</Link>
          </button>
        </div>
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
