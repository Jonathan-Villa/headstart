import {makeStyles} from "@material-ui/core"
import { CenteredGrid } from "../../components/CenteredGrid/centeredGrid"


export const useStyles = makeStyles((theme)=>({
    paper:{
        width:"85%",
        height:"90%", 
     
    },
    root: {
        padding: '0 30px',
        textAlign: true,
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        
      }
}))