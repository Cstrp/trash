import { TabTypes } from '../enums';
import { getYear } from './GetYear';
import { getMonth } from './GetMonth';
import { getWeek } from './GetWeek';
import { getDay } from './GetDay';
import { CalendarData } from '../types';
import { today } from './Today';

export const getCalendarData = (tab: TabTypes): CalendarData => {
  const { date, intervals } = getDay(today);
  const week = getWeek(today);
  const month = getMonth(today);
  const year = getYear(today);

  switch (tab) {
    case TabTypes.DAY:
      return { date, intervals };
    case TabTypes.WEEK:
      return week;
    case TabTypes.MONTH:
      return month;
    case TabTypes.YEAR:
      return year;
    default:
      throw new Error(`Invalid tab type: ${tab}`);
  }
};
