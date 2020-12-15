import { makeStyles } from "@material-ui/core";

export const useFormStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    background: "#ffff",
    
  },
  container:{ 
    boxShadow: '0px 1px 6px rgba(0, 0, 0, .25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' , 
    height: '550px',
    width:'450px',
    borderRadius: '10px',
    justifyContent: 'center',
    padding: "35px",

  },
  headingContainer:{
    display:"flex",
    width: "100%",
    flexDirection:"column",
    alignItems: "center",
    justifyContent:"space-evenly",
    height: "100px"
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "90%",
  },
  form: {
    width: "100%",

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));