import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import * as M from "@material-ui/core";
import { useFormStyles } from "./styles";
import { useUserInput } from "../../customTools/customHooks";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth, getUser } from "../../redux/actions";
import { Snackbar } from "../../components/Alerts";

function Login({ history }) {
  const styles = useFormStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  const { from } = location.state || { from: { pathname: "/home" } };
  const [email, bindEmail, resetEmail] = useUserInput("");
  const [password, bindPassword, resetPassword] = useUserInput("");

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
    // clear the inputs when the user submits
    resetEmail();
    resetPassword();
  };

  const handleLinkClick = () => {
    history.push('/signup')
  };

  return (
    <M.Container maxWidth="xl" className={styles.root}>
      <M.Container className={styles.container}>
        {isRegistered ? <Snackbar /> : null}

        <div className={styles.paper}>
          <div className={styles.headingContainer}>
            <M.Typography variant="h4">Head Start</M.Typography>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
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
              className={styles.submit}
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
                <M.Link
                  onClick={handleLinkClick}
                  href="/signup"
                  variant="body2"
                >
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
