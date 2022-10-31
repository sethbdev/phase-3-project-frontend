import React from "react";
import TherapistAppointmentCard from "./TherapistAppointmentCard";

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
  return (
    <div class="p-2 m-1 flex flex-col justify-around rounded-2xl items-centers">
      {appointmentCard}
    </div>
  );
}

export default TherapistAppointmentList;
