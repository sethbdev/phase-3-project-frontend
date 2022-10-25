import React from "react";

function TherapistAppointmentCard({ date, time, firstName, lastName }) {
  return (
    <div>
      <h4>Date: {date}</h4>
      <h4>Time: {time}</h4>
      <h4>Client: {`${firstName} ${lastName}`}</h4>
    </div>
  );
}

export default TherapistAppointmentCard;
