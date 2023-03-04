import React from "react";
import { Tab, Tabs } from "@mui/material";
import { Props, TabView } from "../../../data/types";
import { activeStyles, styles } from "../../styles";

export const CalendarTabList = ({
  tabs,
  selectedTab,
  handleTabChange,
}: Props & { tabs: TabView[] }): JSX.Element => {
  return (
    <Tabs
      value={selectedTab}
      onChange={handleTabChange}
      sx={{ padding: "20px" }}
      TabIndicatorProps={{ style: { display: "none" } }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.type}
          label={tab.label}
          value={tab.type}
          sx={selectedTab === tab.type ? activeStyles : styles}
        />
      ))}
    </Tabs>
  );
};
