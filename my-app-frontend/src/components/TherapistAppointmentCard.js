import React, { useState } from "react";
import UpdateTherapistAppointment from "./UpdateTherapistAppointment";

function TherapistAppointmentCard({
  date,
  time,
  firstName,
  lastName,
  id,
  deleteTherapistAppointment,
}) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  function handleAppointmentDelete(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => deleteTherapistAppointment(data));
  }
  return (
    <div>
      <h4>Client: {`${firstName} ${lastName}`}</h4>
      <h5>Date: {date}</h5>
      <h5>Time: {time}</h5>
      <button
        onClick={() => setShowUpdateForm((showUpdateForm) => !showUpdateForm)}
      >
        {showUpdateForm ? "Hide Update" : "Update"}
      </button>
      {showUpdateForm ? <UpdateTherapistAppointment /> : null}
      <button onClick={handleAppointmentDelete}>Delete</button>
    </div>
  );
}

export default TherapistAppointmentCard;
