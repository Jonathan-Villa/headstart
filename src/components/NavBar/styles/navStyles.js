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
    background: "#212529",
    position: "static",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      position: "static",
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
    background: "#212529",
    width: drawerWidth,
  },
  collapse: {
    background: "#f8f9fa",
  },
  listItem: {
    "&:hover": {
      
      backgroundColor: "#495057",
    },
  },
  links: {
    textDecoration: "none",
    fontSize: "18px",
    width: "100%",
    height: "30px",
    display: "block",
    color: "#ffff",
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
