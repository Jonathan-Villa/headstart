import React, { useRef, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";
import * as M from "@material-ui/core";
import { useSelector } from "react-redux";

function Snackbar() {
  const [open, setOpen] = useState(true);
  const snack = useRef();

  const alertType = useSelector((state) => state.alertReducer);

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <M.Snackbar
        ref={snack}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
        autoHideDuration={6000}
        open={open}
      >
        <Alert
          variant="filled"
          action={
            <M.IconButton
              aria-label="close alert"
              onClick={handleClose}
              color="inherit"
              size="small"
            >
              <CloseIcon fontSize="inherit" />
            </M.IconButton>
          }
          severity={alertType.type}
        >
          {alertType.message}
        </Alert>
      </M.Snackbar>
    </div>
  );
}

export { Snackbar };
