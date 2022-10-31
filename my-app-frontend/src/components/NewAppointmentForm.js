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
    <div class="bg-green-700 flex flex-col pt-10 pb-10">
      <h2 class="text-white font-sans font-bold text-2xl flex justify-center align-top pt-6">
        Create New Appointment
      </h2>
      <form
        class="flex flex-col justify-center items-center pt-5"
        onSubmit={handleSubmit}
      >
        <label class="font-sans font-semibold text-white p-3">Date:</label>
        <input
          class="rounded-lg p-1 w-60"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <label class="font-sans font-semibold text-white p-3">Time:</label>
        <input
          class="rounded-lg p-1 w-60"
          type="time"
          onChange={(e) => setTime(e.target.value)}
        ></input>
        <label class="font-sans font-semibold text-white p-3">
          Choose a therapist:
        </label>
        <select
          class="rounded-lg p-1 w-60"
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
        <label class="font-sans font-semibold text-white p-3">
          Choose a client:
        </label>
        <select
          class="rounded-lg p-1 w-60"
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
        <input
          class="font sans font-bold p-3 text-white text-md bg-green-500 m-4 w-60 rounded-lg hover:bg-green-600"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewAppointmentForm;
