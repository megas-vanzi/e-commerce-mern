import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          height: "85px",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "10px 0px 20px",
        }}
      >
        <Link to="/">
          <div
            style={{
              width: "80px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Home
          </div>
        </Link>

        <Link to="/dashboard">
          <div
            style={{
              width: "80px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Dashboard
          </div>
        </Link>

        <Link to="/about">
          <div
            style={{
              width: "80px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            About
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
