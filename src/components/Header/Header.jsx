import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Fab
} from "@material-ui/core";

import * as React from "react";
import HideOnScroll from "../HideOnScroll";

import BackToTop from "../BackToTop";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `home`, path: `/home` },
  { title: `timesheets`, path: `/timesheets` },
  { title: `report`, path: `/report` },
  { title: `profile`, path: `/profile` },
  { title: `sign out`, path: `/login` }
];

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar component="nav">
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
              <IconButton edge="start" aria-label="home">
                <a href="/" style={{ color: `white` }}>
                  Home
                </a>
              </IconButton>

              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navListDisplayFlex}
                >
                  {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </a>
                  ))}
                </List>
              </Hidden>
              <Hidden mdUp>
  
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          Test
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
