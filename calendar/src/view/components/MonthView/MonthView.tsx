import { Month } from '../../../data/types';
import React from 'react';

export const MonthView = ({ calendarData }: { calendarData: Month }): JSX.Element => {
  // const [_date, setDate] = useState(moment());
  // const [month, setMonth] = useState<Week[]>([]);
  // const [selectedDay, setSelectedDay] = useState(today);
  //
  // console.log(month);
  // useEffect(() => {
  //   setMonth(getMonth(_date));
  // }, [_date]);
  //
  // const handleChangeMonth = (month: number) => {
  //   changeMonth(month, _date, setDate, setMonth);
  // };
  //
  // const handleSelection = (item: moment.Moment) => {
  //   selected(item, setMonth, setSelectedDay);
  // };

  console.log(calendarData.weeks);

  return (
    <>
      <div>
        {/*{calendarData.weeks?.map((value, index) => (*/}
        {/*  <div key={index}>*/}
        {/*    {value.days.map((dd) => (*/}
        {/*      <div key={dd.day.day()}>{dd.day.day()}</div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </>
  );
};
