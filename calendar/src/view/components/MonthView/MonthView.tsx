import { Month } from '../../../data/types';
import React from 'react';
import { PreLoader } from '../PreLoader/PreLoader';

export const MonthView = ({ calendarData }: { calendarData: Month }): JSX.Element => {
  if (!calendarData) {
    return <PreLoader />;
  }

  return <>{calendarData.weeks.length === 0 ? <PreLoader /> : ''}</>;
};
