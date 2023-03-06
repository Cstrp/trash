import { CalendarData, Day, TimeIntervals } from '../../types';

export const isWeekView = (data: CalendarData): data is { days: Day[]; intervals?: TimeIntervals[] } => {
  return (data as { days: Day[]; intervals?: TimeIntervals[] }) !== undefined;
};
