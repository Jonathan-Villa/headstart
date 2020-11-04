import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./nav.css";
import * as M from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Link,withRouter } from "react-router-dom";
import useNavStyls from "../../helpers/customStyles/navStyles";

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const theme = useTheme();
  const classes = useNavStyls();

  // this state is used for the mobile response
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <M.List id="li-items">
        {[
          { route: "Home", path: "/home" },
          { route: "Time Sheet", path: "/timesheet" },
          { route: "Report", path: "/report" },
          { route: "Profile", path: "/profile" },
          { route: "Sign Out", path: "/login" },
        ].map((text, key) => (
          <M.ListItem button key={key}>
            <Link className="nav-link" to={text.path}>
              {text.route}
            </Link>
          </M.ListItem>
        ))}
        
      </M.List>
    </div>
  );

  return (
    <div>
      <M.CssBaseline />
      <M.AppBar position="static" className={classes.appBar}>
        <M.Toolbar>
          <M.IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <FiMenu />
          </M.IconButton>
          <M.Typography variant="h6" noWrap>
            Head Start
          </M.Typography>
        </M.Toolbar>
      </M.AppBar>

      <nav className={classes.drawer}>
        <M.Hidden smUp implementation="css">
          <M.Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
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
              paper: classes.drawerPaper,
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
