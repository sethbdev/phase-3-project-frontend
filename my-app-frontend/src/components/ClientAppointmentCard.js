import React, { useState } from "react";
import UpdateAppointment from "./UpdateAppointment";

function ClientAppointmentCard({
  date,
  time,
  firstName,
  lastName,
  id,
  updateAppointment,
  deleteAppointment,
}) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  function handleAppointmentDelete(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        deleteAppointment(data);
      });
  }
  return (
    <div class="m-6 bg-green-500 p-6 rounded-xl">
      <h4 class="font-sans text-white font-bold text-2xl">
        {`${firstName} ${lastName}`}
      </h4>
      <h5 class="font-sans text-white font-semibold">{date}</h5>
      <h5 class="font-sans text-white font-semibold">{time}</h5>
      <button
        class="text-green-600 bg-white p-2 mt-2 mr-2 rounded-xl hover:bg-green-900"
        onClick={() => setShowUpdateForm((showUpdateForm) => !showUpdateForm)}
      >
        {showUpdateForm ? "Hide Update" : "Update"}
      </button>
      {showUpdateForm ? (
        <UpdateAppointment
          date={date}
          time={time}
          id={id}
          updateAppointment={updateAppointment}
        />
      ) : null}
      <button
        class="text-green-600 bg-white p-2 mt-2 mr-2 rounded-xl hover:bg-green-900"
        onClick={handleAppointmentDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default ClientAppointmentCard;
