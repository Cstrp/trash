import { CalendarData, Month } from '../../types';

export const isMonthView = (data: CalendarData): data is Month => {
  return (data as Month) !== undefined;
};
