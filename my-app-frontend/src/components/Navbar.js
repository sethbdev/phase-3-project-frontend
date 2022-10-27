import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <h1 className="logo">Grow Therapy</h1>
      <NavLink to="/">
        <button className="card-button">Home</button>
      </NavLink>
      <NavLink exact to="/therapists">
        <button className="card-button">Therapists</button>
      </NavLink>
      <NavLink exact to="/clients">
        <button className="card-button">Clients</button>
      </NavLink>
      <NavLink exact to="/newappointment">
        <button className="card-button">Add Appointment</button>
      </NavLink>
    </div>
  );
}

export default Navbar;
