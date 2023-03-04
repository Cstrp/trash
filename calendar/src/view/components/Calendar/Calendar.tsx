import React from "react";
import { CalendarTabs, DayView, MonthView, WeekView } from "..";
import { Box } from "@mui/material";

export const Calendar = (): JSX.Element => {
  return (
    <Box sx={{ maxWidth: 1490 }}>
      <CalendarTabs />
      <DayView />
      <MonthView />
      <WeekView />
    </Box>
  );
};
