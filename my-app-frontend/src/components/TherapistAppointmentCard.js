import React from "react";

function TherapistAppointmentCard({ date, time, clients, appointmentClient }) {
  const foundClientObj = clients.find(
    (client) => client.id === appointmentClient
  );
  return (
    <div>
      <h4>Date: {date}</h4>
      <h4>Time: {time}</h4>
      <h4>
        Client: {`${foundClientObj.first_name} ${foundClientObj.last_name}`}
      </h4>
    </div>
  );
}

export default TherapistAppointmentCard;
