import React from "react";
import TherapistAppointmentCard from "./TherapistAppointmentCard";

function TherapistAppointmentList({
  appointments,
  deleteTherapistAppointment,
}) {
  const appointmentCard = appointments.map((appointment) => {
    return (
      <TherapistAppointmentCard
        key={appointment.id}
        date={appointment.date}
        time={appointment.time}
        firstName={appointment.client.first_name}
        lastName={appointment.client.last_name}
        id={appointment.id}
        deleteTherapistAppointment={deleteTherapistAppointment}
      />
    );
  });
  return <div>{appointmentCard}</div>;
}

export default TherapistAppointmentList;
