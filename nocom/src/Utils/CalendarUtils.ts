import React from 'react'
import moment from 'moment'
import { Week } from '../Interfaces'
import { generate } from '.'

export const selectedDay = (
  item: moment.Moment,
  setCalendar: React.Dispatch<React.SetStateAction<Week[]>>,
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>
): void => {
  setSelectedDate(item)
  setCalendar((prevCalendar) =>
    prevCalendar.map((week) => ({
      ...week,
      days: week.days.map((day) => ({
        ...day,
        selected: day.day.isSame(item, 'day')
      }))
    })))
};

export function changeMonth(
  month: number,
  date: moment.Moment,
  setDate: React.Dispatch<React.SetStateAction<moment.Moment>>,
  setCalendar: React.Dispatch<React.SetStateAction<Week[]>>
): void {
  setDate(prevDate => prevDate.clone().add(month, 'month'));
  setCalendar(prevCalendar => {
    const newCalendar = generate(date.clone().add(month, 'month'));
    return newCalendar.map(week => ({
      ...week,
      days: week.days.map(day => ({
        ...day,
        selected: false,
      })),
    }));
  });
}
