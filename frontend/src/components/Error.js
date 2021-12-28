import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/dashboard">Go Back</Link>
    </div>
  );
};
