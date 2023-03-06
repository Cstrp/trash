import { Box, Typography } from '@mui/material';
import { momentFormat } from '../../../data/utils';
import { DayViewIntervalsProps } from '../../../data/types';

export const DayViewIntervals = ({ intervals }: DayViewIntervalsProps) => {
  return (
    <>
      {intervals.map((interval, idx) => (
        <Box
          key={idx}
          sx={{
            display: 'flex',
            alignItems: 'center',
            my: 2,
            width: '100%',
            paddingRight: '10px',
            gap: '20px',
          }}
        >
          <Typography variant='body1' color={'action.disabled'}>
            {momentFormat(interval.start, 'HH:mm')}
          </Typography>
          <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'action.disabled' }} />
        </Box>
      ))}
    </>
  );
};
