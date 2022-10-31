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
    <div class="bg-green-700 flex flex-col">
      <h2 class="text-white font-sans font-bold text-2xl flex justify-center align-top pt-6">
        Add New Therapist:{" "}
      </h2>
      <form
        class="flex flex-col justify-center items-center pt-5"
        onSubmit={handleNewTherapist}
      >
        <label class="font-sans font-semibold text-white p-3">
          First Name:
        </label>
        <input
          class="rounded-lg p-1 w-60"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label class="font-sans font-semibold text-white p-3">Last Name:</label>
        <input
          class="rounded-lg p-1 w-60"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label class="font-sans font-semibold text-white p-3">Licensure:</label>
        <select
          class="rounded-lg p-1 w-60"
          onChange={(e) => setLicensure(e.target.value)}
        >
          <option>Select:</option>
          <option value="LPC">LPC</option>
          <option value="LMFT">LMFT</option>
          <option value="LCSW">LCSW</option>
          <option value="PHD">PHD</option>
          <option value="PsyD">PsyD</option>
        </select>
        <label class="font-sans font-semibold text-white p-3">
          Years of experience:{" "}
        </label>
        <input
          class="rounded-lg p-1 w-60"
          type="number"
          onChange={(e) => setExperience(e.target.value)}
        ></input>
        <input
          class="font sans font-bold p-3 text-white text-md bg-green-500 m-4 w-60 rounded-lg hover:bg-green-600"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewTherapistForm;
