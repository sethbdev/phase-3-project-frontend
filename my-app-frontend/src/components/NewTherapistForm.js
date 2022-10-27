import React, { useState } from "react";

/* NewTherapistForm, send POST request to /therapists */

function NewTherapistForm({ addNewTherapist }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [licensure, setLicensure] = useState("unlicensed");
  const [experience, setExperience] = useState(0);

  function handleNewTherapist(e) {
    e.preventDefault();
    const newTherapistObj = {
      first_name: firstName,
      last_name: lastName,
      licensure: licensure,
      years_of_experience: parseInt(experience),
    };

    fetch("http://localhost:9292/therapists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTherapistObj),
    })
      .then((res) => res.json())
      .then((data) => addNewTherapist(data));
  }
  return (
    <div>
      <h2 className="form-title">Add New Therapist: </h2>
      <form className="new-form" onSubmit={handleNewTherapist}>
        <label className="new-label">First Name:</label>
        <input
          className="new-inputs"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label className="new-label">Last Name:</label>
        <input
          className="new-inputs"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label className="new-label">Licensure:</label>
        <select
          className="new-inputs"
          onChange={(e) => setLicensure(e.target.value)}
        >
          <option>Select:</option>
          <option value="LPC">LPC</option>
          <option value="LMFT">LMFT</option>
          <option value="LCSW">LCSW</option>
          <option value="PHD">PHD</option>
          <option value="PsyD">PsyD</option>
        </select>
        <label className="new-label">Years of experience: </label>
        <input
          className="new-inputs"
          type="number"
          onChange={(e) => setExperience(e.target.value)}
        ></input>
        <input className="form-button" type="submit"></input>
      </form>
    </div>
  );
}

export default NewTherapistForm;
