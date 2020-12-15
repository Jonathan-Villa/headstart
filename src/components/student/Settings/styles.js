import {makeStyles} from "@material-ui/core"


export const useStyles = makeStyles(()=> ({
    paper: {
        margin: "50px",
        width:"370px",
        height: "540px"
    },
    heading: {
        margin: "10px"
    },
    form:{
        display:"flex",
        flexDirection:"column",
        width:"auto",
        height: "auto",
        margin: '20px 25px',
        position: "static"
    },
    txtFieldsContainer: {
        width:"100%",
        margin: "10px 0"
    },
    txtField: { 
        margin: "10px 0px"
    },
    btnSubmit: { 
        margin: "10px"
    }

}))