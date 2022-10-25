import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "../index.css";
import Navbar from "./Navbar";
import TherapistListPage from "./TherapistListPage";
import ClientListPage from "./ClientListPage";
import NewTherapistForm from "./NewTherapistForm";
import NewClientForm from "./NewClientForm";
import UpdateTherapistForClientForm from "./UpdateTherapistForClientForm";
import Redirect from "./Redirect.js";
import ClientCard from './ClientCard';
import TherapistCard from './TherapistCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/therapists">
          <TherapistListPage />
        </Route>
        <Route exact path="/clients">
          <ClientListPage />
        </Route>
        <Route exact path="/client/:id">
          <ClientCard />
        </Route>
        <Route exact path="/therapist/:id">
          <TherapistCard />
        </Route>
        <Route exact path="/newclient">
          <NewClientForm />
        </Route>
        <Route exact path="/newtherapist">
          <NewTherapistForm />
        </Route>
        <Route exact path="/updatetherapistforclientform">
          <UpdateTherapistForClientForm />
        </Route>
        <Route path="*">
          <Redirect />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
