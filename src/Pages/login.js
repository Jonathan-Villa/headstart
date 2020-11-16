import React, { useEffect, useState, useRef } from "react";
import "./styles/login.css";
import { withRouter, useLocation } from "react-router-dom";
import * as M from "@material-ui/core";
import  MAlert from "@material-ui/lab/Alert";
import useFormStyles from "../helpers/customStyles/formStyle";
import useUserInput from "../helpers/customHooks/userInput";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../redux/actions/authUser";

function Login({ history }) {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/home" } };
  const dispach = useDispatch();
  const [email, bindEmail, resetEmail] = useUserInput("");
  const [password, bindPassword, resetPassword] = useUserInput("");
  const classes = useFormStyles();
  const [open, setOpen] = useState(true);
  const isRegistered = useSelector(
    (state) => state.registerReducer.registerSuccess
  );

  function Alert(props) {
    return <MAlert elevation={6} variant="filled" {...props} />;
  }
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const userLogin = {
      email: email,
      password: password,
    };
    dispach(loginAuth(userLogin, history, from)); // login the user

    // clear the inputs when the user submits
    resetEmail();
    resetPassword();
  };

  const handleClose = (e) => {
    if (e === "clickaway") {
      return;
    }
    setOpen((state) => (state = false));
  };


  return (
    <M.Container id="login-container">
    
        {isRegistered ? (
          <M.Snackbar  open={open} onClick={handleClose} autoHideDuration={5000}>
            <Alert onClick={handleClose} severity="success">
              Successfully Registered!
            </Alert>
          </M.Snackbar>
        ) : null}

      <M.Container id="login-form-container" maxWidth="xs">
        <div className={classes.paper}>
          <M.Typography component="h1" variant="h5">
            Sign in
          </M.Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
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
              {...bindEmail}
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
              {...bindPassword}
            />
            <M.FormControlLabel
              control={<M.Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <M.Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </M.Button>
            <M.Grid container>
              <M.Grid item xs>
                <M.Link href="#" variant="body2">
                  Forgot password?
                </M.Link>
              </M.Grid>
              <M.Grid item>
                <M.Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </M.Link>
              </M.Grid>
              <M.Grid item></M.Grid>
            </M.Grid>
          </form>
        </div>
      </M.Container>
    </M.Container>
  );
}

export default withRouter(Login);
