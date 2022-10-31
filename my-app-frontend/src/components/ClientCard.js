import React, { useState } from "react";
import ClientAppointmentsList from "./ClientAppointmentsList";

/* ClientCard, send DELETE request to /client/:id */

function ClientCard({
  name,
  appointments,
  clientId,
  updateAppointment,
  deleteAppointment,
}) {
  const [showAppointments, setShowAppointments] = useState(false);
  const clientAppointments = appointments.filter((appointment) => {
    return appointment.client_id === clientId;
  });
  return (
    <div class="inline-block bg-white p-6 m-7 rounded-lg hover:shadow-2xl max-w-lg min-w-min w-96">
      <h2 class="font-sans font-bold text-black text-2xl">{name}</h2>
      <button
        class="bg-green-600 p-2 mt-3 text-white rounded-lg hover:bg-green-700"
        onClick={() =>
          setShowAppointments((showAppointments) => !showAppointments)
        }
      >
        {showAppointments ? "Hide Appointments" : "Appointments"}
      </button>
      {showAppointments ? (
        <ClientAppointmentsList
          clientAppointments={clientAppointments}
          updateAppointment={updateAppointment}
          deleteAppointment={deleteAppointment}
        />
      ) : null}
    </div>
  );
}

export default ClientCard;
