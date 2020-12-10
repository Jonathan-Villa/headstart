import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  paper: {
    width: "420px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    textAlign: "center",
  },
  grantTxt: {
    width: "100px",
    margin: "15px 0"
  },
  dateTxt: {
    width: "175px",
    margin: "15px 0"
  },
  siteTxt: {
    width: "100%",
    margin: "15px 0",
  },
  workTxt: {
    width: "100%",
    margin: "15px 0",
  },
  dateSign: {
    width: "175px",
    margin: "15px 0",
  },
  time: {
    width: "140px",
    margin: "15px 0",
  },
  btnSubmit:{
    margin: "15px 0 0 0",
  },
  btnClear: {
    margin: "15px 0 0 0",
  }
}));
