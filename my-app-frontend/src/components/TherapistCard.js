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
    <div class="inline-block bg-white p-6 m-7 rounded-lg hover:shadow-2xl max-w-lg min-w-min w-96">
      <h2 class="font-sans font-bold text-black text-2xl">{`${firstName} ${lastName}`}</h2>
      <h3 class="font-sans font-semibold text-black text-lg">
        Licensure: {licensure}
      </h3>
      <h3 class="font-sans font-semibold text-black text-lg">
        Experience: {experience} years
      </h3>
      <button
        class="bg-green-600 p-2 mt-3 text-white rounded-lg hover:bg-green-700"
        onClick={() =>
          setShowAppointments((showAppointments) => !showAppointments)
        }
      >
        {showAppointments ? "Hide Appointments" : "Appointments"}
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
