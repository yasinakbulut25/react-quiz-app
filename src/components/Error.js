import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <div className="message">
        <div className="icon">
          <i className="bi bi-exclamation-triangle"></i>
        </div>
        <span>Page not found!</span>
      </div>
      <Link className="error-link" to="/">
        <span>Go Home Page</span> <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  );
}

export default Error;
