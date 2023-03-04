import React from "react";
import { Props, TabView } from "../../../data/types";
import { CalendarTabList } from "../CalendarTabList/CalendarTabList";
import { tabs } from "./Tabs";
import { useSelectedTab } from "../../../data/hooks";

export const withCalendarTabs = (
  Component: React.FC<Props & { tabs: TabView[] }>
) => {
  return () => {
    const { selectedTab, handleTabChange } = useSelectedTab();

    return (
      <Component
        tabs={tabs}
        selectedTab={selectedTab}
        handleTabChange={handleTabChange}
      />
    );
  };
};

export const CalendarTabs = withCalendarTabs(CalendarTabList);
