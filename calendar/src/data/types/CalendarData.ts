import { Month, TimeIntervals, Week, Year } from '.';
import moment from 'moment';

export type CalendarData = { date: moment.Moment; intervals: TimeIntervals[] } | Week | Week[] | Month | Year;
