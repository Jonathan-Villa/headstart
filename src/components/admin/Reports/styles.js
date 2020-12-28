import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles((theme)=> ({
    root: { 
        backgroundColor: "#ffff",
        position:"static",
        height : "100%",
        width: "100%",
    },
    paper:{
        position:"static",
        width:"100%",
        height:"100%",
        padding:"20px"
    }
}))