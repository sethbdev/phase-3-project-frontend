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
      <form onSubmit={handleUpdate}>
        <label>New Date: </label>
        <input
          type="date"
          placeholder={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        ></input>
        <label>New Time: </label>
        <input
          type="time"
          placeholder={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default UpdateAppointment;
