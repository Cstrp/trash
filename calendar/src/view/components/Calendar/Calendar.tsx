import React from 'react';
import { CalendarTabs, Day, MonthView, Week, Year } from '..';
import { isDayView, isMonthView, isWeekView, isYearView } from '../../../data/utils';
import { TabTypes } from '../../../data/enums';
import { Container } from '@mui/material';
import { useCalendar } from '../../../data/hooks/useCalendar';

export const Calendar = (): JSX.Element => {
  const { selectedTab, handleTabChange, handleDateReset, calendarData } = useCalendar();

  return (
    <Container sx={{ maxWidth: '1490px', m: 0 }}>
      <CalendarTabs selectedTab={selectedTab} handleTabChange={handleTabChange} handleTabReset={handleDateReset} />
      {calendarData && (
        <>
          {selectedTab === TabTypes.DAY && isDayView(calendarData) && <Day calendarData={calendarData} />}
          {selectedTab === TabTypes.WEEK && isWeekView(calendarData) && <Week calendarData={calendarData} />}
          {selectedTab === TabTypes.MONTH && isMonthView(calendarData) && <MonthView calendarData={calendarData} />}
          {selectedTab === TabTypes.YEAR && isYearView(calendarData) && <Year calendarData={calendarData} />}
        </>
      )}
    </Container>
  );
};
