import moment, { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import { changeMonth, date, init, mom, weeks } from './services/date.service';
import { week } from '../../../data/utils/week';
import './org.scss';

export const Organizer = () => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());
  const [num, setNum] = useState<number>(1);

  useEffect(() => {
    setCurrentDate(moment());
    init(currentDate);
  }, []);

  const chngMnth = (i: number) => changeMonth(i);
  const inc = () => {
    setNum(num + 1);
    chngMnth(num);
  };

  const dec = () => {
    setNum(num - 1);
    chngMnth(num);
  };

  return (
    <div>
      <p className="flex flex-row gap-5">
        <button onClick={inc}>Plus</button>
        <span>{date.format('MMMM DD YYYY')}</span>
        <button onClick={dec}>Minus</button>
      </p>
      <table className="calendar">
        {week.map((days) => (
          <thead key={days}>
            <tr>
              <th>{days}</th>
            </tr>
          </thead>
        ))}

        <tbody>
          <tr>
            {weeks.map((weekdays, _) => (
              <td key={_}>
                {weekdays.days.map((days, idx) => (
                  <span key={idx}>{mom(days.value, 'DD')}</span>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
