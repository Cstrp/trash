import { Box, Typography } from '@mui/material';
import { momentFormat } from '../../../data/utils';
import { DayViewIntervalsProps } from '../../../data/types';
import style from './dayintervals.module.scss';

export const DayIntervals = ({ intervals }: DayViewIntervalsProps) => {
  return (
    <Box
      className={style.intervals}
      sx={{
        height: '100%',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'grey',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: 'darkgrey',
          },
        },
      }}
    >
      {intervals.map((interval, idx) => (
        <Box
          key={idx}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            height: '60px',
          }}
        >
          <Typography variant='body1' color={'action.disabled'}>
            {momentFormat(interval.start, 'HH:mm')}
          </Typography>
          <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'action.disabled' }} />
        </Box>
      ))}
    </Box>
  );
};
