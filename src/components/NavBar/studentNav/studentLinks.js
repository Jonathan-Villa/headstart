import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItem} from "@material-ui/core";
import { studentSettings, studentTimeSheetLinks } from "../protectedLinks";
import useNavStyles from "../../../helpers/customStyles/navStyles";

export const StudentSettingsLinks = () => {
    const styles = useNavStyles();
    return (
      <>
        {studentSettings.map((item, key) => (
          <ListItem button key={key}>
            <Link className={styles.linksCollapse} to={item.path}>
              {item.pathName}
            </Link>
          </ListItem>
        ))}
      </>
    );
  };
  
export const StudentTimeSheetLinks = () => {
    const styles = useNavStyles();
    return (
      <>
        {studentTimeSheetLinks.map((item, key) => (
          <ListItem button key={key}>
            <Link className={styles.linksCollapse} to={item.path}>
              {item.pathName}
            </Link>
          </ListItem>
        ))}
      </>
    );
  };