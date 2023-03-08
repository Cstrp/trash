import { PreLoader } from '..';
import { YearViewProps } from '../../../data/types';

export const Year = ({ calendarData }: YearViewProps) => {
  if (!calendarData) {
    return <PreLoader />;
  }

  return <>{calendarData.months.length === 0 ? <PreLoader /> : ''}</>;
};
