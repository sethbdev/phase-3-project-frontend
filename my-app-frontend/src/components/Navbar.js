import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <NavLink to="/">
          <button className="navbar-button">Home</button>
        </NavLink>  
        <NavLink exact to="/costumes">
          <button className="navbar-button">Therapists</button>
        </NavLink>
        <NavLink exact to="/stories">
          <button className="navbar-button">Clients</button>
        </NavLink>
        <NavLink exact to="/newstory">
          <button className="navbar-button">Add Client</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar