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
  return (
    <div class="p-2 m-1 flex flex-col justify-around rounded-2xl items-centers">
      {appointmentCard}
    </div>
  );
}

export default ClientAppointmentsList;
