import React from "react";
import { useStyles } from "../../helpers/customStyles/radioGroupStyles";
import * as M from "@material-ui/core";

function RadioGroup(props) {
  const radioStyle = useStyles();

  const handleRadioChange = (event) => {
    // store selected value to the components property
    props.selectedTitle(event.target.value);
  };

  return (
    <M.FormControl className={radioStyle.radioForm} component="fieldset">
      <M.FormLabel>Select your title</M.FormLabel>
      <M.RadioGroup onChange={handleRadioChange} row aria-label="select title">
        <M.FormControlLabel
          value="Student"
          control={<M.Radio />}
          label="Student"
        />
        <M.FormControlLabel
          value="Preceptor"
          control={<M.Radio />}
          label="Preceptor"
        />
      </M.RadioGroup>
    </M.FormControl>
  );
}

export default RadioGroup;
