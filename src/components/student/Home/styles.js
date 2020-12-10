import { makeStyles } from "@material-ui/core";
import { Height } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "50px",

    justifyContent: "space-between",
  },

 
  paper:{
    width:"50%",
    height:"fit-content"
  }

}));
