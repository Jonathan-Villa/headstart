import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";

function MuiDialog({ title, open }) {

    const [close, setClose] = useState(false)
    
  


  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
        <DialogContent>

        </DialogContent>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Close
      </Button>
    </Dialog>
  );
}

export default MuiDialog;
