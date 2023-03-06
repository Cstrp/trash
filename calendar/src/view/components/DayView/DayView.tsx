import { Box } from '@mui/material';
import { DayViewProps } from '../../../data/types';
import { DayViewHeader, DayViewIntervals } from '..';

export const DayView = ({ calendarData }: DayViewProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        maxHeight: '788px',
        margin: '0 auto',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        flexDirection: 'column',
      }}
    >
      <DayViewHeader date={calendarData.date} />
      <DayViewIntervals intervals={calendarData.intervals} />
    </Box>
  );
};
