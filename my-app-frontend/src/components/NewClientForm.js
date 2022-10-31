import React, { useState } from "react";

/* NewClientForm, send POST request to /clients */

function NewClientForm({ addNewClient }) {
  const [newClientFirstName, setNewClientFirstName] = useState("");
  const [newClientLastName, setNewClientLastName] = useState("");
  function handleNewClient(e) {
    e.preventDefault();

    const newClientObj = {
      first_name: newClientFirstName,
      last_name: newClientLastName,
    };

    fetch("http://localhost:9292/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClientObj),
    })
      .then((res) => res.json())
      .then((data) => addNewClient(data));
  }
  return (
    <div class="bg-green-700 flex flex-col">
      <h2 class="text-white font-sans font-bold text-2xl flex justify-center align-top pt-6">
        Create New Client:{" "}
      </h2>
      <form
        class="flex flex-col justify-center items-center pt-5"
        onSubmit={handleNewClient}
      >
        <label class="font-sans font-semibold text-white p-3">
          First Name:
        </label>
        <input
          class="rounded-lg p-1 w-60"
          type="text"
          onChange={(e) => setNewClientFirstName(e.target.value)}
        ></input>
        <label class="font-sans font-semibold text-white p-3">
          Last Name:{" "}
        </label>
        <input
          class="rounded-lg p-1 w-60"
          type="text"
          onChange={(e) => setNewClientLastName(e.target.value)}
        ></input>
        <input
          class="font sans font-bold p-3 text-white text-md bg-green-500 m-4 w-60 rounded-lg hover:bg-green-600"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewClientForm;
