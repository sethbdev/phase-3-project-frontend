import React from "react";
import { NavLink } from "react-router-dom";

function Navbar () {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <NavLink to="/">
          <button className="navbar-button">Home</button>
        </NavLink>  
        <NavLink exact to="/therapists">
          <button className="navbar-button">Therapists</button>
        </NavLink>
        <NavLink exact to="/clients">
          <button className="navbar-button">Clients</button>
        </NavLink>
        <NavLink exact to="/newappointment">
          <button className="navbar-button">Add Appointment</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar