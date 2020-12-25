import {makeStyles} from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    progressBar: {
        borderRadius:"10px",
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(1),
        },
      },
}))