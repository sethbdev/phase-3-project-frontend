import React, { useState } from "react";

function NewAppointmentForm({
  therapists,
  clients,
  addNewAppointment,
  appointments,
}) {
  let [date, setDate] = useState("");
  let [time, setTime] = useState("");
  let [newAppointmentTherapist, setNewAppointmentTherapist] = useState(null);
  let [newAppointmentClient, setNewAppointmentClient] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const newAppointmentObj = {
      date: date,
      time: time,
      therapist_id: newAppointmentTherapist,
      client_id: newAppointmentClient,
    };

    if (newAppointmentTherapist === null && newAppointmentClient === null) {
      window.alert("Need to select therapist and client");
    } else {
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
  }

  return (
    <div>
      <h2 className="form-title">Create New Appointment</h2>
      <form className="new-form" onSubmit={handleSubmit}>
        <label className="new-label">Date:</label>
        <input
          className="new-inputs"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <label>Time:</label>
        <input
          className="new-inputs"
          type="time"
          onChange={(e) => setTime(e.target.value)}
        ></input>
        <label className="new-label">Choose a therapist:</label>
        <select
          className="new-inputs"
          onChange={(e) => setNewAppointmentTherapist(e.target.value)}
        >
          <option>Select Therapist: </option>
          {therapists.map((therapist) => {
            return (
              <option key={therapist.id} value={therapist.id}>
                {`${therapist.first_name} ${therapist.last_name}`}
              </option>
            );
          })}
        </select>
        <label className="new-label">Choose a client:</label>
        <select
          className="new-inputs"
          onChange={(e) => setNewAppointmentClient(e.target.value)}
        >
          <option>Select Client:</option>
          {clients.map((client) => {
            return (
              <option
                key={client.id}
                value={client.id}
              >{`${client.first_name} ${client.last_name}`}</option>
            );
          })}
        </select>
        <input className="form-button" type="submit"></input>
      </form>
    </div>
  );
}

export default NewAppointmentForm;
