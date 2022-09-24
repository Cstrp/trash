import * as moment from 'moment/moment';

export interface IDay {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}
