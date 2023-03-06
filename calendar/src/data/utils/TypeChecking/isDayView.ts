import { CalendarData, TimeIntervals } from '../../types';
import moment from 'moment';

export const isDayView = (data: CalendarData): data is { date: moment.Moment; intervals: TimeIntervals[] } => {
  return (data as { date: moment.Moment; intervals: TimeIntervals[] }).date !== undefined;
};
