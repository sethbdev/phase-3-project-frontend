import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div class="bg-green-700 flex justify-between p-6 items-center">
      <h1 class="text-white font-sans font-extrabold text-2xl">Grow Therapy</h1>
      <NavLink to="/">
        <button class="text-white font-semibold text-xl p-3 hover:bg-green-900 rounded-xl transition">
          Home
        </button>
      </NavLink>
      <NavLink exact to="/therapists">
        <button class="text-white font-semibold text-xl p-3 hover:bg-green-900 rounded-xl transition">
          Therapists
        </button>
      </NavLink>
      <NavLink exact to="/clients">
        <button class="text-white font-semibold text-xl p-3 hover:bg-green-900 rounded-xl transition">
          Clients
        </button>
      </NavLink>
      <NavLink exact to="/newappointment">
        <button class="text-white font-semibold text-xl p-3 hover:bg-green-900 rounded-xl transition">
          Add Appointment
        </button>
      </NavLink>
    </div>
  );
}

export default Navbar;
