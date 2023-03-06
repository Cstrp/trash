import React, { SetStateAction, SyntheticEvent, useMemo, useState } from 'react';
import { CalendarTabs, DayView, MonthView, WeekView, YearView } from '..';
import { getCalendarData, isDayView, isMonthView, isWeekView, isYearView, setQueryParams } from '../../../data/utils';
import { TabTypes } from '../../../data/enums';

export const Calendar = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<TabTypes>(TabTypes.MONTH);

  const handleTabChange = (_: SyntheticEvent, newValue: SetStateAction<TabTypes>) => {
    setQueryParams({ tab: newValue.toString() });
    setSelectedTab(newValue);
  };

  const calendarData = useMemo(() => getCalendarData(selectedTab), [selectedTab]);

  return (
    <>
      <CalendarTabs selectedTab={selectedTab} handleTabChange={handleTabChange} />
      {calendarData && (
        <>
          {selectedTab === TabTypes.DAY && isDayView(calendarData) && <DayView calendarData={calendarData} />}
          {selectedTab === TabTypes.WEEK && isWeekView(calendarData) && <WeekView calendarData={calendarData} />}
          {selectedTab === TabTypes.MONTH && isMonthView(calendarData) && <MonthView calendarData={calendarData} />}
          {selectedTab === TabTypes.YEAR && isYearView(calendarData) && <YearView calendarData={calendarData} />}
        </>
      )}
    </>
  );
};
