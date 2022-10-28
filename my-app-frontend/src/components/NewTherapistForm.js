import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

/* NewTherapistForm, send POST request to /therapists */

function NewTherapistForm({ addNewTherapist }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [licensure, setLicensure] = useState("unlicensed");
  const [experience, setExperience] = useState(0);

  function handleNewTherapist(e) {
    e.preventDefault();
    const newTherapistObj = {
      first_name: firstName,
      last_name: lastName,
      licensure: licensure,
      years_of_experience: parseInt(experience),
    };

    fetch("http://localhost:9292/therapists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTherapistObj),
    })
      .then((res) => res.json())
      .then((data) => addNewTherapist(data));
  }
  return (
    <Container>
      <Typography variant="h3" className="form-title">
        Add New Therapist:{" "}
      </Typography>
      <form className="new-form" onSubmit={handleNewTherapist}>
        <TextField
          label="First Name"
          className="new-inputs"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        ></TextField>
        <TextField
          label="Last Name"
          className="new-inputs"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        ></TextField>

        <Select
          label="Licensure"
          onChange={(e) => setLicensure(e.target.value)}
        >
          <MenuItem>Select:</MenuItem>
          <MenuItem value="LPC">LPC</MenuItem>
          <MenuItem value="LMFT">LMFT</MenuItem>
          <MenuItem value="LCSW">LCSW</MenuItem>
          <MenuItem value="PHD">PHD</MenuItem>
          <MenuItem value="PsyD">PsyD</MenuItem>
        </Select>
        <input
          className="new-inputs"
          type="number"
          onChange={(e) => setExperience(e.target.value)}
        ></input>
        <input className="form-button" type="submit"></input>
      </form>
    </Container>
  );
}

export default NewTherapistForm;
