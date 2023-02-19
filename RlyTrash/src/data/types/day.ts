import * as moment from 'moment';

export type Day = {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
};
