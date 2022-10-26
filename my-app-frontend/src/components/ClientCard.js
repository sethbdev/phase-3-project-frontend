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
    <div>
      <h2>{name}</h2>
      <button
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
