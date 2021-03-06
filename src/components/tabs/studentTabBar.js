import React, { useState } from "react";
import {useSelector} from "react-redux"
import { AppBar, Tab } from "@material-ui/core";
import { useTabStyles } from "./styles/tabStyles";
import { TabContext, TabPanel, TabList } from "@material-ui/lab";
import { ViewAll, ViewCurrent, ViewRejected } from "../Student/StudentTabPanels";

const StudentTabs = () => {
  const [value, setValue] = useState('1');
  const styles = useTabStyles()
  const payload = useSelector((state) => state.timeSheetReducer.payload); 
  const isLoading = useSelector((state)=> state.timeSheetReducer.isTimeSheetLoading)
  const error = useSelector((state)=> state.timeSheetReducer.isTimeSheetError)
  
  const handleTabChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.root}>
      <TabContext value={value}>
        <AppBar className={styles.appBar} position="static">
          <TabList textColor="primary" indicatorColor="primary" value={value} onChange={handleTabChange}>
            <Tab value="1" label="View Current" />
            <Tab value="2" label="View All" />
            <Tab value="3" label="View Rejected" />

            
          </TabList>
        </AppBar>

        <TabPanel value="1">
          <ViewCurrent error={error} isLoading={isLoading} payload={payload} />
        </TabPanel>
        <TabPanel value="2">
          <ViewAll />
        </TabPanel>
        <TabPanel value="3">
          <ViewRejected  />
        </TabPanel>
        
      </TabContext>
    </div>
  );
};

export { StudentTabs };
