import React, { useState, useRef } from "react";
import {
  Paper,
  TextField,
  Button,
  MenuItem,
  Dialog,
  DialogActions,
  DialogTitle,
  InputAdornment,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AiOutlineUpload } from "react-icons/ai";
import { grants } from "./grants";
import { useStyles } from "./styles";
import "./styles.css";
import SignatureCanvas from "react-signature-canvas";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { quickLogError, alertError } from "../../redux/actions";

function QuickLogForm() {
  const [open, setOpen] = useState(false);
  const userID = useSelector((state) => state.userReducer.id);
  const today = Date.now();
  const styles = useStyles();
  const clearPad = useRef();
  const dispatch = useDispatch();
  const dateOfSign = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);

  const [logData, setLogData] = useState({
    grant: "HS",
    date: "",
    site: "",
    workPerformed: "",
    timeIn: "",
    timeOut: "",
    id: userID,
    preceptorSignature: "",
    dateOfSign: dateOfSign,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setLogData({
      ...logData,
      [e.target.name]: value,
    });
  };

  const handleUploadDialog = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
    // get trimmed signature image
    logData.preceptorSignature = clearPad.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
  };

  const handleClearSignPad = () => {
    clearPad.current.clear(); // clears signature pad
  };

  const handleQuickLogSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(logData));
    fetch("http://localhost:4000/api/quicklog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    }).catch((err) => {
      if (err) {
        dispatch(quickLogError());
        dispatch(alertError("Your QuickLog failed!"));
      }
    });

    setLogData({
      grant: "HS",
      date: "",
      site: "",
      workPerformed: "",
      timeIn: "",
      timeOut: "",
      id: userID,
      preceptorSignature: "",
      dateOfSign: dateOfSign,
    });
  };

  return (
    <Paper elevation={3} className={styles.paper}>
      <div className="header-container">
        <Typography variant="h6">Quick Log</Typography>
      </div>
      <form onSubmit={handleQuickLogSubmit} className="quick-log-form">
        <div className="grant-date-container">
          <TextField
            select
            required
            className={styles.grantTxt}
            label="Select Grant"
            variant="outlined"
            size="small"
            onChange={handleChange}
            name="grant"
            value={logData.grant}
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
            value={logData.date}
            name="date"
            onChange={handleChange}
            color="primary"
            size="small"
            variant="outlined"
            className={styles.dateTxt}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <TextField
          label="Site"
          type="text"
          size="small"
          color="primary"
          variant="outlined"
          required
          name="site"
          value={logData.site}
          className={styles.siteTxt}
          onChange={handleChange}
        />

        <TextField
          label="Work Performed"
          type="text"
          color="primary"
          variant="outlined"
          multiline={true}
          required
          value={logData.workPerformed}
          name="workPerformed"
          size="small"
          onChange={handleChange}
          className={styles.workTxt}
        />

        <div className="time-in-out-container">
          <TextField
            label="Time IN"
            type="time"
            color="primary"
            required
            size="small"
            variant="outlined"
            name="timeIn"
            value={logData.timeIn}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            className={styles.time}
          />
          <TextField
            label="Time OUT"
            type="time"
            required
            color="primary"
            size="small"
            name="timeOut"
            onChange={handleChange}
            value={logData.timeOut}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            className={styles.time}
          />
        </div>

        <TextField
          id="preceptor-sign"
          required
          size="small"
          disabled
          label={
            logData.preceptorSignature
              ? "Succesfully Signed!"
              : "Preceptor Signature"
          }
          color="primary"
          InputProps={{
            endAdornment: (
              <InputAdornment onClick={handleUploadDialog}>
                <IconButton>
                  <AiOutlineUpload />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          className={styles.signTxt}
        />
        <Dialog open={open}>
          <DialogTitle>Preceptor Signature</DialogTitle>
          <SignatureCanvas
            ref={clearPad}
            penColor="black"
            canvasProps={{
              width: 700,

              height: 200,
              className: "preceptorSign",
            }}
          />
          <DialogActions>
            <Button
              color="secondary"
              variant="outlined"
              onClick={handleClearSignPad}
            >
              Clear
            </Button>
            <Button color="primary" onClick={handleDialogClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <TextField
          label="Date of Signature"
          type="text"
          size="small"
          color="primary"
          variant="outlined"
          disabled
          required
          value={logData.preceptorSignature ? dateOfSign : ""}
          InputLabelProps={{
            shrink: true,
          }}
          className={styles.dateSign}
        />

        <div className="btn-quicklog-container">
          <Button
            className={styles.btnClear}
            type="post"
            color="secondary"
            variant="outlined"
          >
            Clear
          </Button>
          <Button
            className={styles.btnSubmit}
            type="post"
            color="primary"
            variant="outlined"
          >
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export { QuickLogForm };
