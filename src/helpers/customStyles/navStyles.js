import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 200;
const useNavStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    // drawer style 
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
        background: "#353535",
      },
    },
    // app bar style
    appBar: {
      background: "#353535",
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    // Menu style
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // Handles content within
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      background: "#353535",
      width: drawerWidth,
    },
  }));

export default useNavStyles