import moment from 'moment';
import { Week } from '../../../../data/types';

export const date: moment.Moment = moment();

export let weeks: Week[] = [];

export const changeMonth = (item: number) => {
  date.add(item, 'M');
  init(date);

  // if (date !== null) {
  //   date = date.add(item, 'month');
  // }
};

export const changeDate = (data: moment.Moment) => {
  data = data.set({
    date: data.date(),
    month: data.month() + 1,
  });

  if (data.date() === 1) {
    data = data.subtract(1, 'day');
  }

  return data;
};

export const mom = (m: moment.Moment, format = 'MMMM YYYYY'): string => m?.format(format);

export const init = (now: moment.Moment) => {
  const startOfMonth = now.clone().startOf('month').startOf('week');
  const endOfMonth = now.clone().endOf('month').endOf('week');
  const lastMonthDay = startOfMonth.clone().subtract(1, 'day');

  const calendar: Week[] = [];

  while (lastMonthDay.isBefore(endOfMonth, 'day')) {
    const days: moment.Moment[] = Array(7)
      .fill(0)
      .sort((a, b) => a.day - b.day)
      .map(() => lastMonthDay.add(1, 'day').clone());

    const weeksDays = days.map((day) => {
      const isActive = moment().isSame(day, 'date');
      const isDisabled = !now.isSame(day, 'month');
      const isSelected = now.isSame(day, 'date');

      return { value: day, active: isActive, disabled: isDisabled, selected: isSelected };
    });

    calendar.push({ days: weeksDays });
  }

  weeks = calendar;
};

export const select = (item: moment.Moment) => changeDate(item);
