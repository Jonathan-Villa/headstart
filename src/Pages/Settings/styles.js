import {makeStyles} from "@material-ui/core"



export const useStyles = makeStyles((theme)=>({
    paper:{
        width:"100%",
        height:"100vh", 
     
    },
    root: {
        padding: '0 30px',
        textAlign: true,
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        
      }
}))