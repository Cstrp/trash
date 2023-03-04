import { Week } from "../../../data/types";
import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import {
  changeMonth,
  getMonth,
  selectedDay as selected,
} from "../../../data/utils";
import { MonthViewGrid, MonthViewHeader } from "..";

export const MonthView = (): JSX.Element => {
  const [date, setDate] = useState(moment());
  const [month, setMonth] = useState<Week[]>([]);
  const [selectedDay, setSelectedDay] = useState(moment());

  useEffect(() => {
    setMonth(getMonth(date));
  }, [date]);

  const handleChangeMonth = (month: number) => {
    changeMonth(month, date, setDate, setMonth);
  };

  const handleSelection = (item: moment.Moment) => {
    selected(item, setMonth, setSelectedDay);
  };

  return (
    <>
      <MonthViewHeader
        date={date}
        onNextMonth={() => handleChangeMonth(1)}
        onPrevMonth={() => handleChangeMonth(-1)}
      />
      <MonthViewGrid
        month={month}
        selectedDay={selectedDay}
        onSelectDay={handleSelection}
      />
    </>
  );
};
