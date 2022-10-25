import React from "react";
import TherapistCard from "./TherapistCard";

function TherapistListPage({ therapists, deleteTherapistAppointment }) {
  const therapistCard = therapists.map((therapist) => {
    return (
      <TherapistCard
        key={therapist.id}
        firstName={therapist.first_name}
        lastName={therapist.last_name}
        licensure={therapist.licensure}
        experience={therapist.years_of_experience}
        appointments={therapist.appointments}
        clients={therapist.clients}
        deleteTherapistAppointment={deleteTherapistAppointment}
      />
    );
  });

  return <div>{therapistCard}</div>;
}

export default TherapistListPage;
