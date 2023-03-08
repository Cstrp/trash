import { TabTypes } from '../enums';
import { getYear } from './GetYear';
import { getMonth } from './GetMonth';
import { getWeek } from './GetWeek';
import { getDay } from './GetDay';
import { CalendarData } from '../types';
import moment from 'moment';

export const getCalendarData = (tab: TabTypes, _date: moment.Moment): CalendarData => {
  const { date, intervals } = getDay(_date);
  const week = getWeek(_date);
  const month = getMonth(_date);
  const year = getYear(_date);

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
