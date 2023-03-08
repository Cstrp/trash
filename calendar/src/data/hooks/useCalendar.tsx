import { SetStateAction, SyntheticEvent, useMemo, useState } from 'react';
import moment from 'moment';
import { TabTypes } from '../enums';
import { getCalendarData, setQueryParams, today } from '../utils';

export const useCalendar = () => {
  const [date, setDate] = useState<moment.Moment>(today);
  const [selectedTab, setSelectedTab] = useState<TabTypes>(TabTypes.MONTH);

  const handleTabChange = (_: SyntheticEvent, newValue: SetStateAction<TabTypes>) => {
    setQueryParams({ tab: newValue.toString() });
    setSelectedTab(newValue);
  };

  const handleDateReset = () => setDate(today);

  const calendarData = useMemo(() => getCalendarData(selectedTab, date), [date, selectedTab]);

  return {
    selectedTab,
    handleTabChange,
    handleDateReset,
    calendarData,
  };
};
