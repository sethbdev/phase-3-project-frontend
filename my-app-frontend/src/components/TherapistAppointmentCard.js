import React from "react";

function TherapistAppointmentCard({ date, time, firstName, lastName }) {
  return (
    <div>
      <h4>Client: {`${firstName} ${lastName}`}</h4>
      <h5>Date: {date}</h5>
      <h5>Time: {time}</h5>
    </div>
  );
}

export default TherapistAppointmentCard;
