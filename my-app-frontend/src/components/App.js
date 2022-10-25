import React, { useEffect, useState } from "react";
import "./App.css";
import "../index.css";

import TherapistListPage from "./TherapistListPage";
import NewAppointmentForm from "./NewAppointmentForm";

function App() {
  let [therapists, setTherapists] = useState([]);
  let [clients, setClients] = useState([]);
  let [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/therapists")
      .then((res) => res.json())
      .then((data) => setTherapists(data));

    fetch("http://localhost:9292/clients")
      .then((res) => res.json())
      .then((data) => setClients(data));

    fetch("http://localhost:9292/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  function addNewAppointment(obj) {
    setAppointments(obj);
  }

  return (
    <div className="App">
      <TherapistListPage therapists={therapists} />
      <NewAppointmentForm
        therapists={therapists}
        clients={clients}
        addNewAppointment={addNewAppointment}
      />
    </div>
  );
}

export default App;
