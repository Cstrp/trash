import moment from "moment";
import { Week } from ".";

export interface Month {
  month: moment.Moment;
  weeks: Week[];
}
