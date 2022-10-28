import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
      <Alert severity="error">("Need to select therapist and client");</Alert>;
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
        <Select
          label="Therapist"
          className="new-inputs"
          onChange={(e) => setNewAppointmentTherapist(e.target.value)}
        >
          <MenuItem>Select Therapist: </MenuItem>
          {therapists.map((therapist) => {
            return (
              <MenuItem key={therapist.id} value={therapist.id}>
                {`${therapist.first_name} ${therapist.last_name}`}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          label="Client"
          onChange={(e) => setNewAppointmentClient(e.target.value)}
        >
          <MenuItem>Select Client:</MenuItem>
          {clients.map((client) => {
            return (
              <MenuItem
                key={client.id}
                value={client.id}
              >{`${client.first_name} ${client.last_name}`}</MenuItem>
            );
          })}
        </Select>
        <input className="form-button" type="submit"></input>
      </form>
    </div>
  );
}

export default NewAppointmentForm;
