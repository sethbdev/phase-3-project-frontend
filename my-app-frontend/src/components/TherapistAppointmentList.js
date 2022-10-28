import React from "react";
import TherapistAppointmentCard from "./TherapistAppointmentCard";
import Stack from "@mui/material/Stack";

function TherapistAppointmentList({
  therapistAppointments,
  updateAppointment,
  deleteAppointment,
}) {
  const appointmentCard = therapistAppointments.map((appointment) => {
    return (
      <TherapistAppointmentCard
        key={appointment.id}
        date={appointment.date}
        time={appointment.time}
        firstName={appointment.client.first_name}
        lastName={appointment.client.last_name}
        id={appointment.id}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    );
  });
  return <Stack spacing={2}>{appointmentCard}</Stack>;
}

export default TherapistAppointmentList;
