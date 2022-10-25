import React, { useState } from "react";
import TherapistAppointmentList from "./TherapistAppointmentList";

/*TherapistCard, send DELETE request to /therapist/:id*/

function TherapistCard({
  firstName,
  lastName,
  licensure,
  experience,
  appointments,
  clients,
}) {
  let [showAppointments, setShowAppointments] = useState(false);

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
          appointments={appointments}
          clients={clients}
        />
      ) : null}
    </div>
  );
}

export default TherapistCard;
