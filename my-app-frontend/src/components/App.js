import logo from '../logo.svg';
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
import Redirect from "./Redirect";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/therapists">
          <TherapistListPage />
        </Route>
        <Route exact path="/clients">
          <ClientListPage />
        </Route>
        <Route exact path="/client/:id">
          <Client />
        <Route exact path="/therapist/:id">
          <Therapist />
        </Route>
        <Route exact path="/newclient">
          <NewClientForm />
        <Route exact path="/newtherapist">
          <NewTherapistForm />
        </Route>
        <Route path="*">
          <Redirect />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
