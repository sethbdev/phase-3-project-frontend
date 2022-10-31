import React, { useState } from "react";
import AppointmentCard from "./AppointmentCard";

function DailyAppointmentsPage({ appointments }) {
  const [todayDate, setTodayDate] = useState("");

  const todayAppointments = appointments.filter((appointment) => {
    if (todayDate === "") {
      return appointment;
    } else {
      return appointment.date === todayDate;
    }
  });
  const appointmentCard = todayAppointments.map((appointment) => {
    return (
      <AppointmentCard
        key={appointment.id}
        id={appointment.id}
        date={appointment.date}
        time={appointment.time}
        therapistName={`${appointment.therapist.first_name} ${appointment.therapist.last_name}`}
        clientName={`${appointment.client.first_name} ${appointment.client.last_name}`}
      />
    );
  });
  return (
    <div class="bg-green-700 p-10 m-10 justify-around rounded-2xl items-center">
      <div class="flex justify-center items-center mb-10 p-6">
        <label class="p-3 font-sans font-bold text-white text-xl">
          Select Date:{" "}
        </label>
        <input
          class="p-3 rounded-xl"
          type="date"
          onChange={(e) => setTodayDate(e.target.value)}
        ></input>
      </div>
      <div className="appointment-list">{appointmentCard}</div>
    </div>
  );
}

export default DailyAppointmentsPage;
