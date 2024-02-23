import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import CustomAccordion from "../accordion";

import AccordionSkeleton from "./components/accordionSkeleton";
import NoDataComponent from "./components/noDataComponent";
import ErrorComponent from "./components/errorComponent";

import "./index.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function AccordionDataRenderer({
  tabsData,
  isDataFetchInProgress,
  fetchErrorOccurred,
}) {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="multi-tab-container">
      <Tabs
        value={value}
        onChange={handleTabChange}
        aria-label="configurable tabs"
      >
        {tabsData.map((tab, index) => (
          <Tab
            label={tab.label}
            key={index}
            sx={{
              "&:not(:first-of-type)": {
                ml: 62,
              },
            }}
          />
        ))}
      </Tabs>

      {isDataFetchInProgress ? (
        <AccordionSkeleton />
      ) : fetchErrorOccurred ? (
        <ErrorComponent />
      ) : (
        tabsData?.map((tab, index) => (
          <TabPanel value={value} index={index} key={index}>
            {tab?.content?.length ? (
              <CustomAccordion accordionData={tab?.content} />
            ) : (
              <NoDataComponent />
            )}
          </TabPanel>
        ))
      )}
    </div>
  );
}
