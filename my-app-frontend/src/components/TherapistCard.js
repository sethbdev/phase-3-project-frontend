import React, { useState } from "react";
import TherapistAppointmentList from "./TherapistAppointmentList";

/*TherapistCard, send DELETE request to /therapist/:id*/

function TherapistCard({
  firstName,
  lastName,
  licensure,
  experience,
  appointments,
  updateAppointment,
  deleteAppointment,
  therapistId,
}) {
  const [showAppointments, setShowAppointments] = useState(false);
  const therapistAppointments = appointments.filter((appointment) => {
    return appointment.therapist_id === therapistId;
  });

  return (
    <div>
      <h2>{`${firstName} ${lastName}`}</h2>
      <h3>Licensure: {licensure}</h3>
      <h3>Experience: {experience} years</h3>
      <button
        onClick={() =>
          setShowAppointments((showAppointments) => !showAppointments)
        }
      >
        {showAppointments ? "Hide Form" : "Appointments"}
      </button>
      {showAppointments ? (
        <TherapistAppointmentList
          therapistAppointments={therapistAppointments}
          updateAppointment={updateAppointment}
          deleteAppointment={deleteAppointment}
        />
      ) : null}
    </div>
  );
}

export default TherapistCard;
