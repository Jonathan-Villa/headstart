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
    color: "#000",
    overflowX:"hidden",
    overflowY:"hidden",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, .35)",
    height: "600px",
    maxWidth: "440px",
    borderRadius: "6px",
    padding:"0px",
    display:"flex ",
    justifyContent:"center",
    position:"static"
  },
  heading: {
    margin:"10px"
  },
  form: {
    margin:"40px 10px",
    width: "400px",
    position:"absolute",
  },
  submitBtn: {
    margin: theme.spacing(2, 0, 2),
  },
  progressBar: {
    width:"100%"
  },


}));

