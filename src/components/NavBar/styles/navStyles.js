import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 200;
export const useNavStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // drawer style
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      background: "#ffff",
    },
  },
  // app bar style
  appBar: {
    background: "#001845",
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
    background: "#ffff",
    width: drawerWidth,
  },
  collapse: {
    background: "#f8f9fa",
  },
  links: {
    textDecoration: "none",
    fontSize: "18px",
    width: "100%",
    height: "30px",
    display: "block",
    color: "black",
  },
  linksCollapse: {
    marginLeft: "10px",
    height: "27px",
    fontSize: "15px",
    textDecoration: "none",
    color: "black",
    display: "block",
  },
}));