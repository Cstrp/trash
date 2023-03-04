import { TimeIntervals } from "../types";
import moment from "moment";

export const getDay = (date: moment.Moment) => {
  const intervals: TimeIntervals[] = [];

  let start = date.clone().startOf("day");
  const end: moment.Moment = date.clone().startOf("day");

  while (end.isBefore(date.clone().endOf("day"))) {
    intervals.push({ start, end });
    end.add(1, "hour");
    start = end.clone();
  }

  const formattedIntervals = date.format("dddd");

  return {
    date: formattedIntervals,
    intervals,
  };
};
