import moment from 'moment';
import { Day } from '../types';
import { getDay } from './GetDay';

export const getWeek = (date: moment.Moment) => {
  const days: Day[] = [];

  const { intervals } = getDay(date);
  const startOfWeek = date.clone().startOf('isoWeek');
  const endOfWeek = date.clone().endOf('isoWeek');

  let currentDate = startOfWeek.clone();

  while (currentDate.isSameOrBefore(endOfWeek, 'day')) {
    const day: Day = {
      day: currentDate,
      selected: currentDate.isSame(moment(), 'day'),
      active: currentDate.isSame(moment(), 'day'),
      disabled: !currentDate.isSame(moment(), 'day'),
    };

    days.push(day);

    currentDate = currentDate.clone().add(1, 'day');
  }

  const todayIdx = days.findIndex((day) => day.selected);

  if (todayIdx === -1) {
    const today = days[todayIdx];
    days.splice(todayIdx, 1);
    days.unshift(today);
  }

  return { days, intervals };
};
