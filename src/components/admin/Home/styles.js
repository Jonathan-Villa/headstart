import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles(()=> ({
    root: { 
        display: "flex",
        margin: "40px 0px",
        height : "100%",
        width: "100%",
        justifyContent: "space-between",
    },
    paper:{
        margin:"30px 50px",
        width:"800px",
        height:"fit-content"
    }
}))