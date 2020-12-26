import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles(()=> ({
    root: { 
        backgroundColor: "#ffff",
        position:"fixed",
        height : "100%",
        width: "100%",
    },
    paper:{
        position:"static",
        width:"80%",
    }
}))