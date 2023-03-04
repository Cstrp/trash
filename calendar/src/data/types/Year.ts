import { Month } from ".";
import moment from "moment";

export interface Year {
  year: moment.Moment;
  months: Month[];
}
