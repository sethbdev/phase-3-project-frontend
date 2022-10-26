import React from "react";
import ClientAppointmentCard from "./ClientAppointmentCard";

function ClientAppointmentsList({
  clientAppointments,
  updateAppointment,
  deleteAppointment,
}) {
  const appointmentCard = clientAppointments.map((appointment) => {
    return (
      <ClientAppointmentCard
        key={appointment.id}
        date={appointment.date}
        time={appointment.time}
        firstName={appointment.therapist.first_name}
        lastName={appointment.therapist.last_name}
        id={appointment.id}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    );
  });
  return <div>{appointmentCard}</div>;
}

export default ClientAppointmentsList;
