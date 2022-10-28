import React, { useState } from "react";
import TherapistAppointmentList from "./TherapistAppointmentList";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

/*TherapistCard, send DELETE request to /therapist/:id*/

function TherapistCard({
  firstName,
  lastName,
  licensure,
  experience,
  appointments,
  updateAppointment,
  deleteAppointment,
  therapistId,
}) {
  const [showAppointments, setShowAppointments] = useState(false);
  const therapistAppointments = appointments.filter((appointment) => {
    return appointment.therapist_id === therapistId;
  });

  return (
    <Grid item sx={6} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4">{`${firstName} ${lastName}`}</Typography>
          <Typography variant="h5">Licensure: {licensure}</Typography>
          <Typography variant="h5">Experience: {experience} years</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={() =>
              setShowAppointments((showAppointments) => !showAppointments)
            }
          >
            {showAppointments ? "Hide Appointments" : "Appointments"}
          </Button>
        </CardActions>
        {showAppointments ? (
          <TherapistAppointmentList
            therapistAppointments={therapistAppointments}
            updateAppointment={updateAppointment}
            deleteAppointment={deleteAppointment}
          />
        ) : null}
      </Card>
    </Grid>
  );
}

export default TherapistCard;
