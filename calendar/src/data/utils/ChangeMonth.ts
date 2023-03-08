import moment from 'moment';
import React from 'react';
import { Week } from '../types';
import { getMonth } from './GetMonth';
import { today } from './Today';

export const changeMonth = (
  month: number,
  date: moment.Moment = today,
  setDate?: React.Dispatch<React.SetStateAction<moment.Moment>>,
  setCalendar?: React.Dispatch<React.SetStateAction<Week[]>>,
): void => {
  if (setDate) {
    setDate((prevDate) => prevDate.clone().add(month, 'month'));
  }
  if (setCalendar) {
    setCalendar(() => {
      const newCalendar = getMonth(date.clone().add(month, 'month'));
      return newCalendar.weeks.map((week) => ({
        ...week,
        days: week.days.map((day) => ({
          ...day,
          selected: false,
        })),
      }));
    });
  }
};
