import React, { useState } from "react";

/* UpdateTherapistForClientForm, send PATCH request to /clients/:id */

function UpdateAppointment({ date, time, id, updateAppointment }) {
  const [newDate, setNewDate] = useState(date);
  const [newTime, setNewTime] = useState(time);

  function handleUpdate(e) {
    e.preventDefault();
    const updatedAppointmentObj = {
      date: newDate,
      time: newTime,
    };
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAppointmentObj),
    })
      .then((res) => res.json())
      .then((data) => updateAppointment(data));
  }
  return (
    <div>
      <form class="new-form" onSubmit={handleUpdate}>
        <label className="new-label">New Date: </label>
        <input
          className="new-inputs"
          type="date"
          placeholder={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        ></input>
        <label className="new-label">New Time: </label>
        <input
          className="new-inputs"
          type="time"
          placeholder={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        ></input>
        <input className="form-button" type="submit"></input>
      </form>
    </div>
  );
}

export default UpdateAppointment;
