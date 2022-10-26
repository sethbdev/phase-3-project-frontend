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
    <div>
      <label>Select Date:</label>
      <input type="date" onChange={(e) => setTodayDate(e.target.value)}></input>
      {appointmentCard}
    </div>
  );
}

export default DailyAppointmentsPage;
