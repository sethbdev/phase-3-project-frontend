import React, { useState } from "react";
import UpdateAppointment from "./UpdateAppointment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TherapistAppointmentCard({
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
    <Card>
      <CardContent>
        <Typography variant="h5">
          Client: {`${firstName} ${lastName}`}
        </Typography>
        <Typography variant="h7">Date: {date}</Typography>
        <Typography variant="h7">Time: {time}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => setShowUpdateForm((showUpdateForm) => !showUpdateForm)}
        >
          {showUpdateForm ? "Hide Update" : "Update"}
        </Button>
      </CardActions>
      {showUpdateForm ? (
        <UpdateAppointment
          date={date}
          time={time}
          id={id}
          updateAppointment={updateAppointment}
        />
      ) : null}
      <CardActions>
        <Button variant="contained" onClick={handleAppointmentDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TherapistAppointmentCard;
