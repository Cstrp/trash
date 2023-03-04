import moment from 'moment';
import { Day, Month, Week, Year } from '../types';

export const getYear = (date: moment.Moment) => {
  const year: Year = {
    year: date,
    months: [],
  };

  let month: moment.Moment = date.clone().startOf('year');

  while (month.isSame(date, 'year')) {
    const monthObj: Month = {
      month: moment(),
      weeks: [],
    };

    let weekStart: moment.Moment = month.clone().startOf('month');
    let weekEnd: moment.Moment = weekStart.clone().endOf('week');

    while (weekEnd.isSame(month, 'month')) {
      const week: Week = {
        days: [],
      };

      for (let i = 0; i < 7; i++) {
        const day: Day = {
          day: weekStart.clone(),
          active: weekStart.isSame(date, 'day'),
          disabled: !weekStart.isSame(month, 'day'),
        };

        week.days.push(day);

        weekStart = weekStart.clone().add(1, 'day');
      }

      monthObj.weeks.push(week);
      weekEnd = weekStart.clone().endOf('week');
    }

    year.months.push(monthObj);
    month = month.clone().add(1, 'month');
  }

  return year;
};
