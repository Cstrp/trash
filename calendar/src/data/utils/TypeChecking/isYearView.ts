import { CalendarData, Year } from '../../types';

export const isYearView = (data: CalendarData): data is Year => {
  return (data as Year) !== undefined;
};
