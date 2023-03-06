import { TimeIntervals } from '../TimeIntervals';
import moment from 'moment';

export interface DayViewProps {
  calendarData: { date: moment.Moment; intervals: TimeIntervals[] };
}
