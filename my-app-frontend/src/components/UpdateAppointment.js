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
      <form class="flex flex-col m-4 p-4" onSubmit={handleUpdate}>
        <label class="font-sans text-white font-semibold m-1">New Date: </label>
        <input
          class="p-1 rounded-md m-1"
          type="date"
          placeholder={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        ></input>
        <label class="font-sans m-1 text-white font-semibold">New Time: </label>
        <input
          class="p-1 rounded-md m-1"
          type="time"
          placeholder={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        ></input>
        <input
          class="text-green-600 bg-white p-2 mt-2 ml-2 rounded-xl hover:bg-green-900"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default UpdateAppointment;
