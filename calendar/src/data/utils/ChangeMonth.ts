import moment from "moment";
import React from "react";
import { Week } from "../types";
import { getMonth } from "./GetMonth";

export const changeMonth = (
  month: number,
  date: moment.Moment,
  setDate: React.Dispatch<React.SetStateAction<moment.Moment>>,
  setCalendar: React.Dispatch<React.SetStateAction<Week[]>>
): void => {
  setDate((prevDate) => prevDate.clone().add(month, "month"));
  setCalendar(() => {
    const newCalendar = getMonth(date.clone().add(month, "month"));
    return newCalendar.map((week) => ({
      ...week,
      days: week.days.map((day) => ({
        ...day,
        selected: false,
      })),
    }));
  });
};
