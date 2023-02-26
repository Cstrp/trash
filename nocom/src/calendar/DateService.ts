import moment from 'moment/moment'

export interface DateService {
  changeMonth: (month: number) => void;
  changeDate: (date: moment.Moment) => void;
}
