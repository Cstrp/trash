import { Box, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Day } from '../../../data/types';
import { momentFormat } from '../../../data/utils';

export interface WeekHeaderProps {
  days: Day[];
}

export const WeekHeader = ({ days }: WeekHeaderProps): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        {days.map((day, i) => (
          <TableCell key={i} sx={{ paddingLeft: '320px', textAlign: 'center', borderBottom: 'none' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography variant={'h6'} color={'text.primary'}>
                {momentFormat(day.day, 'dd')},
              </Typography>
              <Typography
                variant={'button'}
                sx={{
                  fontSize: '20px',
                  color: day.active ? 'primary.main' : 'text.primary',
                  backgroundColor: day.active ? 'text.secondary' : 'background.default',
                  padding: day.active ? '0 10px' : '0 10px',
                  borderRadius: '100%',
                }}
              >
                {momentFormat(day.day, 'D')}
              </Typography>
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
