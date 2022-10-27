import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "../index.css";
import Navbar from "./Navbar";
import TherapistListPage from "./TherapistListPage";
import NewAppointmentForm from "./NewAppointmentForm";
import ClientListPage from "./ClientListPage";
import DailyAppointmentsPage from "./DailyAppointmentsPage";

function App() {
  let [therapists, setTherapists] = useState([]);
  let [clients, setClients] = useState([]);
  let [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/clients")
      .then((res) => res.json())
      .then((data) => setClients(data));

    fetch("http://localhost:9292/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("http://localhost:9292/therapists");
      // convert the data to json
      const json = await data.json();

      // set state with the result
      setTherapists(json);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  function addNewAppointment(obj) {
    setAppointments([...appointments, obj]);
  }

  function deleteAppointment(obj) {
    const filteredAppointmentsArray = appointments.filter(
      (appointment) => appointment.id !== obj.id
    );

    setAppointments(filteredAppointmentsArray);
  }

  function updateAppointment(updatedObj) {
    const updatedAppointmentsArray = appointments.map((appointment) => {
      if (appointment.id === updatedObj.id) {
        return updatedObj;
      }
      return appointment;
    });

    setAppointments(updatedAppointmentsArray);
  }

  function addNewClient(obj) {
    setClients([...clients, obj]);
  }

  function addNewTherapist(obj) {
    setTherapists([...therapists, obj]);
  }

  return (
    <div className="App"> 
      <div>
        <Navbar />
        <Switch>
          
          <Route path="/therapists">
            <TherapistListPage
            therapists={therapists}
            updateAppointment={updateAppointment}
            deleteAppointment={deleteAppointment}
            appointments={appointments}
            addNewTherapist={addNewTherapist}
            />
          </Route>
            <Route path="/newappointment">
            <NewAppointmentForm
            therapists={therapists}
            clients={clients}
            appointments={appointments}
            addNewAppointment={addNewAppointment}
            />
          </Route>
          <Route path="/clients">
            <ClientListPage
            clients={clients}
            appointments={appointments}
            updateAppointment={updateAppointment}
            deleteAppointment={deleteAppointment}
            addNewClient={addNewClient}
            />
          </Route>

          <Route exact path="/">
            <DailyAppointmentsPage appointments={appointments}/>
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
