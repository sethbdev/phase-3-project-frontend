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
    <div>
      <h2>Create New Client: </h2>
      <form onSubmit={handleNewClient}>
        <label>First Name:</label>
        <input
          type="text"
          onChange={(e) => setNewClientFirstName(e.target.value)}
        ></input>
        <label>Last Name: </label>
        <input
          type="text"
          onChange={(e) => setNewClientLastName(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default NewClientForm;
