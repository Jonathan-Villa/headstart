import { makeStyles } from "@material-ui/core";

export const useFormStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  subroot: {
    boxShadow: "0px 1px 6px rgba(0, 0, 0, .35)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "680px",
    width: "500px",
    borderRadius: "10px",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "500px",
  },
  form: {
    width: "93%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
