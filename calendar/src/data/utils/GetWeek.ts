import moment from "moment";
import { Day, Week } from "../types";

export const getWeek = (date: moment.Moment): Week => {
  const days: Day[] = [];
  const startOfWeek = date.clone().startOf("week");
  const endOfWeek = date.clone().endOf("week");

  let currentDate = startOfWeek.clone();

  while (currentDate.isSameOrBefore(endOfWeek, "day")) {
    const day: Day = {
      day: currentDate,
      selected: currentDate.isSame(moment(), "day"),
      active: currentDate.isSame(moment(), "day"),
      disabled: !currentDate.isSame(moment(), "day"),
    };

    days.push(day);

    currentDate = currentDate.clone().add(1, "day");
  }

  return { days };
};
