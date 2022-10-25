import React, { useState } from "react";

function NewAppointmentForm({ therapists, clients, addNewAppointment }) {
  let [date, setDate] = useState("");
  let [time, setTime] = useState("");
  let [newAppointmentTherapist, setNewAppointmentTherapist] = useState("");
  let [newAppointmentClient, setNewAppointmentClient] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newAppointmentObj = {
      date: date,
      time: time,
      therapist_id: newAppointmentTherapist,
      client_id: newAppointmentClient,
    };

    fetch("http://localhost:9292/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointmentObj),
    })
      .then((res) => res.json())
      .then((data) => addNewAppointment(data));
  }

  return (
    <div>
      <h2>Create New Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label for="date">Date:</label>
        <input type="text" onChange={(e) => setDate(e.target.value)}></input>
        <label for="time">Time:</label>
        <input type="text" onChange={(e) => setTime(e.target.value)}></input>
        <label for="therapist">Choose a therapist:</label>
        <select onChange={(e) => setNewAppointmentTherapist(e.target.value)}>
          {therapists.map((therapist) => {
            return (
              <option value={therapist.id}>
                {`${therapist.first_name} ${therapist.last_name}`}
              </option>
            );
          })}
        </select>
        <label for="client">Choose a client:</label>
        <select onChange={(e) => setNewAppointmentClient(e.target.value)}>
          {clients.map((client) => {
            return (
              <option
                value={client.id}
              >{`${client.first_name} ${client.last_name}`}</option>
            );
          })}
        </select>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default NewAppointmentForm;
