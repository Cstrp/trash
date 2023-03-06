import { Week } from '.';
import moment from 'moment';

export interface Month {
  month?: moment.Moment;
  weeks: Week[];
}
