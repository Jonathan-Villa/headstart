import { makeStyles, createMuiTheme } from "@material-ui/core";

export const useFormStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  subroot: {
    color: "#000",
    boxShadow: "0px 1px 6px rgba(0, 0, 0, .35)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "700px",
    width: "500px",
    borderRadius: "10px",
    justifyContent: "center",
  },
  heading: {
    margin:"10px"
  },
  form: {
    width: "100%",
  },
  submitBtn: {
    margin: theme.spacing(2, 0, 2),
  },
}));

