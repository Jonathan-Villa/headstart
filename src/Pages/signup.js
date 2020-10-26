import React from "react";
import * as M from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "./styles/signup.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup() {
  const classes = useStyles();
  return (
    <M.Container id="sign-up-container">
      <M.Container id="sign-up-form" maxWidth="xs">
        <M.Typography component="h1" variant="h5">
          Sign Up
        </M.Typography>
        <form className={classes.form} noValidate>
          <M.TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <M.TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="firstName"
            label="First Name"
            type="text"
            id="fName-input"
          />
          <M.TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            type="text"
            id="lName-input"
          />
          <M.TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <M.Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </M.Button>
        </form>
      </M.Container>
    </M.Container>
  );
}

export default Signup;
