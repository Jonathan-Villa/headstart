import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItem, Collapse, List } from "@material-ui/core";
import useNavStyles from "../../../helpers/customStyles/navStyles";
import { StudentSettingsLinks, StudentTimeSheetLinks } from "./studentLinks";

export const StudentNav = () => {
  const styles = useNavStyles();
  const [openTimeSheet, setTimeSheetOpen] = useState();
  const [openSettings, setOpenSettings] = useState();

  const handleTimeSheetClick = () => {
    setTimeSheetOpen((prev) => !prev);
  };

  const handleSettingsClick = () => {
    setOpenSettings((prev) => !prev);
  };

  return (
    <div>
      <ListItem button>
        <Link className={styles.links} to="/home">
          Home
        </Link>
      </ListItem>
      <ListItem open={openTimeSheet} onClick={handleTimeSheetClick} button>
        <Link className={styles.links} to="/time-sheet">
          Time Sheet
        </Link>
      </ListItem>
      <Collapse
        className={styles.collapse}
        onClick={handleTimeSheetClick}
        component="li"
        in={openTimeSheet}
        timeout="auto"
        unmountOnExit
      >
        <List>
          <StudentTimeSheetLinks />
        </List>
      </Collapse>

      <ListItem open={openSettings} onClick={handleSettingsClick}>
        <Link className={styles.links} to="/settings">
          Settings
        </Link>
      </ListItem>
      <Collapse
        className={styles.collapse}
        component="li"
        timeout="auto"
        unmountOnExit
        onClick={handleSettingsClick}
        in={openSettings}
      >
        <List>
          <StudentSettingsLinks />
        </List>
      </Collapse>
    </div>
  );
};

export default StudentNav;
