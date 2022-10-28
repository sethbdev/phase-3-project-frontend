import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Stack from "@mui/material/Stack";

function Navbar() {
  return (
    <AppBar position="static">
      <ToolBar>
        <Typography variant="h3">Grow Therapy</Typography>
        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
          <NavLink to="/">
            <Button variant="contained">Home</Button>
          </NavLink>
          <NavLink exact to="/therapists">
            <Button variant="contained">Therapists</Button>
          </NavLink>
          <NavLink exact to="/clients">
            <Button variant="contained">Clients</Button>
          </NavLink>
          <NavLink exact to="/newappointment">
            <Button variant="contained">Add Appointment</Button>
          </NavLink>
        </Stack>
      </ToolBar>
    </AppBar>
  );
}

export default Navbar;
