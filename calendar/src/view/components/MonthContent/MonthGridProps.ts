import { Week } from '../../../data/types';
import moment from 'moment/moment';

export type MonthGridProps = {
  month: Week[];
  selectedDay: moment.Moment;
  onSelectDay: (day: moment.Moment) => void;
};
