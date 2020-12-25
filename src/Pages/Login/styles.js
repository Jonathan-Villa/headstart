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
    overflowX:"hidden",
    overflowY:"hidden",
    height: '460px',
    maxWidth:'400px',
    borderRadius: '6px',
    justifyContent:"center",
    padding: "0px",
  },
  headingContainer:{
    width: "100%",
    textAlign:"center",
    verticalAlign:"center",
    marginBottom:"20px",
    position:"static"
  },

  progressBar:{
    width:"100%"
  },
  form: {
    bottom:"31%",
    width: "350px",
    position:"absolute"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));