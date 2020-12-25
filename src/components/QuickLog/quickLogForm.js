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
import { useUserInput } from "../../customTools/customHooks";
import SignatureCanvas from "react-signature-canvas";
import { useSelector } from "react-redux";

import axios from "axios";
function QuickLogForm() {
  const [grant, bindGrant, resetGrant] = useUserInput("HS");
  const [open, setOpen] = useState(false);
  const [date, bindDate, resetDate] = useUserInput();
  const [site, bindSite, resetSite] = useUserInput();
  const [workPerformed, bindWorkPerformed, resetWorkPerformed] = useUserInput();
  const [timeIn, bindTimeIn, resetTimeIn] = useUserInput();
  const [timeOut, bindTimeOut, resetTimeOut] = useUserInput();
  const [signatureImage, setSignatureImage] = useState();
  const userID = useSelector((state) => state.loginReducer.id);

  const styles = useStyles();
  const clearPad = useRef();
  const today = Date.now();


  const [dateOfSign, bindDateOfSign, resetDateOfSign] = useUserInput(
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(today)
  );

  const handleUploadDialog = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
    // get trimmed signature image
    setSignatureImage(
      clearPad.current.getTrimmedCanvas().toDataURL("image/png")
    );
  };

  const handleClearSignPad = () => {
    clearPad.current.clear(); // clears signature pad
  };

  const handleQuickLogSubmit = (e) => {
    e.preventDefault();

    const payload = {
      grant: grant,
      date: date,
      site: site,
      workPerformed: workPerformed,
      timeIn: timeIn % 12 || 12,
      timeOut: timeOut,
      dateOfSign: dateOfSign,
      preceptorSignature: signatureImage,
      id: userID,
    }

    axios
      .post("http://localhost:4000/api/quicklog", payload )
      .catch((err) => console.log(err));

    resetGrant();
    resetDate();
    resetDateOfSign();
    resetSite();
    resetTimeIn();
    resetTimeOut();
    resetWorkPerformed();
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
            {...bindGrant}
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
            color="primary"
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
          color="primary"
          variant="outlined"
          required
          className={styles.siteTxt}
          {...bindSite}
        />

        <TextField
          label="Work Performed"
          type="text"
          color="primary"
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
            color="primary"
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
            color="primary"
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
          id="preceptor-sign"
          required
          size="small"
          disabled
          label={signatureImage ? "Succesfully Signed!" : "Preceptor Signature"}
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
          required
          placeholder={signatureImage ? dateOfSign : ""}
          InputLabelProps={{
            shrink: true,
          }}
          className={styles.dateSign}
          {...bindDateOfSign}
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
