import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  FormControl,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { grants } from "./grants";
import { useStyles } from "./styles";
import "./styles.css";
import { useUserInput } from "../../customTools/customHooks";

function QuickLogForm() {
  const styles = useStyles();
  const [grant, setGrant] = useState("HS");
  const [date, bindDate, resetDate] = useUserInput();
  const [site, bindSite, resetSite] = useUserInput();
  const [workPerformed, bindWorkPerformed, resetWorkPerformed] = useUserInput();
  const [timeIn, bindTimeIn, resetTimeIn] = useUserInput();
  const [timeOut, bindTimeOut, resetTimeOut] = useUserInput();
  const [totalHours, bindTotalHours, resetTotalHours] = useUserInput();
  const [preceptorSign, bindPreceptorSign, resetPreceptorSign] = useUserInput();
  const [dateOfSign, bindDateOfSign, resetDateOfSign] = useUserInput();

  const handleGrantChange = (e) => {
    setGrant(e.target.value);
  };

  console.log(timeIn, timeOut, workPerformed, date, site)

  return (
    <Paper elevation={3} className={styles.paper}>
      <div className="header-container">
        <Typography variant="h6">Quick Log</Typography>
      </div>
      <form className="quick-log-form">
        <div className="grant-date-container">
          <TextField
            select
            required
            className={styles.grantTxt}
            label="Select Grant"
            variant="outlined"
            size="small"
            value={grant}
            onChange={handleGrantChange}
          >
            {grants.map((index, key) => (
              <MenuItem key={key} value={index.value}>
                {index.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="date"
            label="Date"
            required
            size="small"
            variant="outlined"
            className={styles.dateTxt}
            InputLabelProps={{
              shrink: true,
            }}
            {...bindDate}
          />
        </div>

        <TextField
          label="Site"
          type="text"
          size="small"
          variant="outlined"
          rowsMax={false}
          required
          className={styles.siteTxt}
          {...bindSite}
        />

        <TextField
          label="Work Performed"
          type="text"
          variant="outlined"
          multiline={true}
          required
          size="small"
          className={styles.workTxt}
          {...bindWorkPerformed}
        />

        <div className="time-in-out-container">
          <TextField
            label="Time IN"
            type="time"
            required
            size="small"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            className={styles.time}
            {...bindTimeIn}
          />
          <TextField
            label="Time OUT"
            type="time"
            required
            size="small"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            className={styles.time}
            {...bindTimeOut}
          />
        </div>

        
        <TextField
          label="Date of Signature"
          type="date"
          size="small"
          variant="outlined"
          required
          InputLabelProps={{
            shrink: true,
          }}
          className={styles.dateSign}
          {...bindDateOfSign}
        />

        <div className="btn-quicklog-container">
          <Button className={styles.btnClear} type="post" color="secondary" variant="outlined">
            Clear
          </Button>
          <Button className={styles.btnSubmit} type="post" color="primary" variant="outlined">
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export { QuickLogForm };
