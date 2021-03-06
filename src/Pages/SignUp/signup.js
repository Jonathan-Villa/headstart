import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import * as M from "@material-ui/core";
import { useFormStyles } from "./styles";
import { useUserInput } from "../../customTools/customHooks";
import { useDispatch, useSelector } from "react-redux";
import { registerAuth, registerRequest } from "../../redux/actions";
import { RadioGroup } from "../../components/RadioGroup";
import { LinearProgressBar } from "../../components";

function Signup({ history }) {
  const dispatch = useDispatch();
  const styles = useFormStyles();

  const alertMessage = useSelector((state) => state.alertReducer);

  const [title, setTitle] = useState();
  const [firstName, bindFirstName, resetFirstName] = useUserInput("");
  const [lastName, bindLastName, resetLastName] = useUserInput("");
  const [email, bindEmail, resetEmail] = useUserInput("");
  const [userName, bindUserName, resetUserName] = useUserInput("");
  const [password, bindPassword, resetPassword] = useUserInput("");
  const registerRequested = useSelector(
    (state) => state.registerReducer.registering
  );

  const handleSubmit = (e) => {
    e.preventDefault(); // e or "event" -> upon submitting, prevent the page from refreshing

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: userName,
      title: title,
      password: password,
    };

    console.log(user);
    dispatch(registerRequest());

    dispatch(registerAuth(user, history));

    // registers the user

    // clear the inputs when the user submits
    resetEmail();
    resetFirstName();
    resetLastName();
    resetPassword();
    resetUserName();
  };

  const handleRadioChange = (data) => {
    setTitle(data);
  };

  return (
    <M.Container className={styles.root}>
      <M.Container className={styles.subroot}>
        <div className={styles.progressBar}>
          {registerRequested ? (
            <LinearProgressBar color="primary" variant="indeterminate" />
          ) : null}
        </div>

        <form className={styles.form} method="POST" onSubmit={handleSubmit}>
          <M.Typography className={styles.heading} align="center" variant="h4">
            Sign Up
          </M.Typography>

          <M.TextField
            variant="outlined"
            margin="normal"
            type="email"
            required
            size="small"
            autoFocus
            fullWidth
            error={alertMessage.type === "error" ? true : false}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            {...bindEmail}
          />
          <M.TextField
            variant="outlined"
            margin="normal"
            required
            size="small"
            fullWidth
            name="firstName"
            label="First Name"
            type="text"
            id="fName-input"
            {...bindFirstName}
          />
          <M.TextField
            variant="outlined"
            margin="normal"
            required
            size="small"
            fullWidth
            name="lastName"
            label="Last Name"
            type="text"
            id="lName-input"
            {...bindLastName}
          />

          <M.TextField
            variant="outlined"
            margin="normal"
            size="small"
            required
            fullWidth
            style={{ color: "white" }}
            className={styles.txtField}
            name="userName"
            label="Username"
            type="text"
            id="userName-input"
            {...bindUserName}
          />
          <M.TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            size="small"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...bindPassword}
          />

          <RadioGroup data={title} selectedTitle={handleRadioChange} />

          <M.Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submitBtn}
          >
            Sign Up
          </M.Button>
        </form>
      </M.Container>
    </M.Container>
  );
}

export default withRouter(Signup);
export { Signup };

