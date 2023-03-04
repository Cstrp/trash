import { Week } from "../../../data/types";
import moment from "moment/moment";

export type MonthViewGridProps = {
  month: Week[];
  selectedDay: moment.Moment;
  onSelectDay: (day: moment.Moment) => void;
};
