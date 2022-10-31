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
      <div class="bg-green-700 p-10 m-10 justify-around rounded-2xl items-center">
        {therapistCard}
      </div>
      <NewTherapistForm addNewTherapist={addNewTherapist} />
    </div>
  );
}

export default TherapistListPage;
