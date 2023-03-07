import { Box, Typography } from '@mui/material';
import { Day } from '../../../data/types';
import { momentFormat } from '../../../data/utils';

export interface WeekViewHeaderProps {
  days: Day[];
}

export const WeekViewHeader = ({ days }: WeekViewHeaderProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {days.map((day, idx) => (
        <Box key={idx} sx={{ flex: 1 }}>
          <Typography
            variant='h6'
            sx={{
              color: 'text.primary',
            }}
          >
            {momentFormat(day.day, 'dd')},{' '}
          </Typography>
          <Typography
            variant={'button'}
            sx={{
              fontSize: '20px',
              color: day.active ? 'primary.main' : 'text.primary',
              backgroundColor: day.active ? 'text.secondary' : 'background.default',
              padding: day.active ? '5px 10px' : '10px 10px',
              borderRadius: '100%',
            }}
          >
            {momentFormat(day.day, 'D')}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
