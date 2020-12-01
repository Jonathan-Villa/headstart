import React from "react";
import "./pageStyles/login.css";
import { withRouter, useLocation } from "react-router-dom";
import * as M from "@material-ui/core";
import { useFormStyles } from "./pageStyles/formStyles";
import { useUserInput } from "../customTools/customHooks";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../redux/actions";
import { Snackbar } from "../components/alerts";
import { alertSuccess } from "../redux/actions";

function Login({ history }) {
  const classes = useFormStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  const { from } = location.state || { from: { pathname: "/home" } };
  const [email, bindEmail, resetEmail] = useUserInput("");
  const [password, bindPassword, resetPassword] = useUserInput("");

  console.log(from)

  const isRegistered = useSelector(
    (state) => state.registerReducer.registerSuccessful
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const userLogin = {
      email: email,
      password: password,
    };
    dispatch(loginAuth(userLogin, history, from)); // login the user
    dispatch(alertSuccess("Successfully logged in!"));
    // clear the inputs when the user submits
    resetEmail();
    resetPassword();
  };

  return (
    <M.Container id="login-container">
      <M.Container id="login-form-container" maxWidth="xs">
        {isRegistered ? <Snackbar /> : null}

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
export { Login };
export default withRouter(Login);
