import { Paper, Typography, TextField, Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";


function StudentSettings() {
  const styles = useStyles();



  return (
    <Paper className={styles.paper} elevation={3}>
      <form className={styles.form}>
        <Typography variant="h4" align="center" className={styles.heading}>
          Account
        </Typography>

        <div className={styles.txtFieldsContainer}>
          <TextField
            className={styles.txtField}
            fullWidth
            variant="outlined"
            label="First Name"
          />
          <TextField
            className={styles.txtField}
            fullWidth
            variant="outlined"
            label="Last Name"
          />
          <TextField
            className={styles.txtField}
            fullWidth
            variant="outlined"
            label="Email"
          />
          <TextField
            className={styles.txtField}
            fullWidth
            variant="outlined"
            label="Username"
          />
          <TextField
            className={styles.txtField}
            fullWidth
            variant="outlined"
            label="Password"
          />
        </div>

        <Button
          type="post"
          className={styles.btnSubmit}
          variant="outlined"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export { StudentSettings };
