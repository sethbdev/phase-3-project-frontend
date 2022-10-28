import React from "react";
import TherapistCard from "./TherapistCard";
import NewTherapistForm from "./NewTherapistForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";

function TherapistListPage({
  therapists,
  updateAppointment,
  deleteAppointment,
  appointments,
  addNewTherapist,
}) {
  const therapistCard = therapists.map((therapist) => {
    return (
      <TherapistCard
        key={therapist.id}
        therapistId={therapist.id}
        firstName={therapist.first_name}
        lastName={therapist.last_name}
        licensure={therapist.licensure}
        experience={therapist.years_of_experience}
        appointments={appointments}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    );
  });

  return (
    <Container>
      <Grid container spacing={4} justifyContent="flex-start">
        {therapistCard}
      </Grid>
      <NewTherapistForm addNewTherapist={addNewTherapist} />
    </Container>
  );
}

export default TherapistListPage;
