import { Box } from '@mui/material';
import { DayViewProps } from '../../../data/types';
import { DayIntervals } from '..';

export const Day = ({ calendarData }: DayViewProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: '1023px',
        flexDirection: 'column',
        maxHeight: '920px',
      }}
    >
      <DayIntervals intervals={calendarData.intervals} />
    </Box>
  );
};
