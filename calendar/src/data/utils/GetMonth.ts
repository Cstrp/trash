import moment from 'moment';
import { Month } from '../types';

export const getMonth = (date: moment.Moment) => {
  const month: Month = { month: date, weeks: [] };
  const startData = date.clone().startOf('month').startOf('week');
  const endData = date.clone().endOf('month').endOf('week');
  const _date = startData.clone().subtract(1, 'day');

  while (_date.isBefore(endData, 'day')) {
    month.weeks.push({
      days: Array(7)
        .fill(0)
        .map(() => {
          const day = _date.add(1, 'day').clone();
          const active = moment().isSame(day, 'date');
          const disabled = !date.isSame(day, 'month');
          const selected = moment().isSame(day, 'date');

          return {
            day: day,
            active,
            disabled,
            selected,
          };
        }),
    });
  }
  return month;
};
