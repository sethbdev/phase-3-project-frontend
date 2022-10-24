import logo from '../logo.svg';
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "../index.css";
import Navbar from "./Navbar";
import Countdown from "./Countdown";
import CostumesPage from "./CostumesPage";
import StoriesPage from "./StoriesPage";
import StoriesForm from "./StoriesForm";
import StoryDetail from "./StoryDetail";
import Redirect from "./Redirect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
