import React from "react";
import TherapistCard from "./TherapistCard";
import NewTherapistForm from "./NewTherapistForm";

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
    <div>
      <div className="card-list">{therapistCard}</div>
      <NewTherapistForm addNewTherapist={addNewTherapist} />
    </div>
  );
}

export default TherapistListPage;
