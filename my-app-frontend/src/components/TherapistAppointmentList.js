import React from "react";
import TherapistAppointmentCard from "./TherapistAppointmentCard";

function TherapistAppointmentList({ appointments, clients }) {
  const appointmentCard = appointments.map((appointment) => {
    return (
      <TherapistAppointmentCard
        key={appointment.id}
        date={appointment.date}
        time={appointment.time}
        appointmentClient={appointment.client_id}
        clients={clients}
      />
    );
  });
  return <div>{appointmentCard}</div>;
}

export default TherapistAppointmentList;
