import React from "react";

function AppointmentCard({ date, time, therapistName, clientName }) {
  return (
    <div className="card-appointment-list">
      <h3 class="text-4xl">Date: {date}</h3>
      <h3>Time: {time}</h3>
      <h3>Therapist: {therapistName}</h3>
      <h3>Client: {clientName}</h3>
    </div>
  );
}

export default AppointmentCard;
