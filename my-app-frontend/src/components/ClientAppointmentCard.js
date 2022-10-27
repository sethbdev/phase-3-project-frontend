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
    <div>
      <h4>Therapist: {`${firstName} ${lastName}`}</h4>
      <h5>Date: {date}</h5>
      <h5>Time: {time}</h5>
      <button
        className="card-button"
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
      <button className="card-button" onClick={handleAppointmentDelete}>
        Delete
      </button>
    </div>
  );
}

export default ClientAppointmentCard;
