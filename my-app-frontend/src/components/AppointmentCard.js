import React from "react";

function AppointmentCard({ date, time, therapistName, clientName }) {
  return (
    <div class="flex flex-row bg-white justify-between items-center p-6 rounded-xl m-6">
      <h3 class="text-2xl font-sans font-bold">Date: {date}</h3>
      <h3 class="font-san font font-semibold text-xl">Time: {time}</h3>
      <h3 class="font-san font font-semibold text-xl">
        Therapist: {therapistName}
      </h3>
      <h3 class="font-san font font-semibold text-xl">Client: {clientName}</h3>
    </div>
  );
}

export default AppointmentCard;
