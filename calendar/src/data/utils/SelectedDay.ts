import moment from "moment";
import { Week } from "../types";
import React from "react";

export const selectedDay = (
  item: moment.Moment,
  setCalendar: React.Dispatch<React.SetStateAction<Week[]>>,
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>
): void => {
  setCalendar((prevCalendar) =>
    prevCalendar.map((week) => ({
      ...week,
      days: week.days.map((day) => {
        switch (true) {
          case day.disabled:
            return day;
          case day.day.isSame(item, "day"):
            setSelectedDate(item);
            return {
              ...day,
              selected: true,
            };
          default:
            return {
              ...day,
              selected: false,
            };
        }
      }),
    }))
  );
};
