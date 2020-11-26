import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import * as M from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useNavStyles from "../../helpers/customStyles/navStyles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/actions";
import { alertSuccess } from "../../redux/actions/alertAction";
import StudentNav from "./studentNav/studentNav"

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const theme = useTheme();
  const styles = useNavStyles();

  const isLoggedIn = useSelector((state) => state.loginReducer.isAuthenticated);
  const dispach = useDispatch();

  // this state is used for the mobile response
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleSignOutClick = () => {
    // removing token will sign the user out
    localStorage.removeItem("jwt-token"); 

    if (!isLoggedIn) {
      dispach(logout());
      dispach(alertSuccess("You have successfully"));
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={styles.toolbar} />
      <M.List >
        <StudentNav/>

        {isLoggedIn ? (
          <M.ListItem>
            <Link onClick={handleSignOutClick} to="#" className={styles.links}>
              Sign Out
            </Link>
          </M.ListItem>
        ) : null}
      </M.List>
    </div>
  );

  return (
    <div>
      <M.CssBaseline />
      <M.AppBar position="static" className={styles.appBar}>
        <M.Toolbar>
          <M.IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <FiMenu />
          </M.IconButton>
          <M.Typography variant="h6" noWrap>
            Head Start
          </M.Typography>
        </M.Toolbar>
      </M.AppBar>

      <nav className={styles.drawer}>
        <M.Hidden smUp implementation="css">
          <M.Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </M.Drawer>
        </M.Hidden>

        <M.Hidden xsDown implementation="css">
          <M.Drawer
            classes={{
              paper: styles.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </M.Drawer>
        </M.Hidden>
      </nav>
    </div>
  );
}

export default Navbar;
