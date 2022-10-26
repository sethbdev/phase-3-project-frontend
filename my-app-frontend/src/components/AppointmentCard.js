import React from "react";

function AppointmentCard({ date, time, therapistName, clientName }) {
  return (
    <div>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
      <h3>Therapist: {therapistName}</h3>
      <h3>Client: {clientName}</h3>
    </div>
  );
}

export default AppointmentCard;
