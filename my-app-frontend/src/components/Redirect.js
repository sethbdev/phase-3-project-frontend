import React from "react";
import { Link } from "react-router-dom";

function Redirect () {
  return (
    <div>
      <h1 className="redirect-message">You have found the Twilight Zone!</h1>
      <button className="redirect-button">
        <Link className="redirect-link" to="/">
          Return to safety!
        </Link>
      </button>
    </div>
  );
};

export default Redirect;
