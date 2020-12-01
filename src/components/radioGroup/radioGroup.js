import React from "react";
import { useRadioGroupStyles } from "./styles/radioGroupStyles";
import * as M from "@material-ui/core";

function RadioGroup(props) {
  const radioStyle = useRadioGroupStyles();

  const handleRadioChange = (event) => {
    // store selected value to the components property
    props.selectedTitle(event.target.value);
  };
  return (
    <M.FormControl  required className={radioStyle.radioForm} component="fieldset">
      <M.FormLabel>Select your title</M.FormLabel>
      <M.RadioGroup onChange={handleRadioChange}  row aria-label="select title">
        <M.FormControlLabel
          value="student"
          control={<M.Radio />}
          label="Student"
        />
        <M.FormControlLabel
          value="admin"
          control={<M.Radio />}
          label="Admin"
        />
      </M.RadioGroup>
      <M.FormHelperText>{props.helplabel} </M.FormHelperText>
    </M.FormControl>
  );
}

export { RadioGroup };
