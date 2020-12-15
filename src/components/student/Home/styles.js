import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    margin: "30px 0px",
    height : "650px",
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },

 
  paper:{
    margin:"0px 50px",
    width:"800px",
    height:"fit-content"
  }

}));
