import { Box, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Day, TimeIntervals } from '../../../data/types';

export interface WeekContentProps {
  days: Day[];
  intervals: TimeIntervals[] | undefined;
}

export const WeekContent: ({ days, intervals }: WeekContentProps) => JSX.Element = ({
  days,
  intervals,
}: WeekContentProps) => {
  return (
    <TableBody>
      {intervals?.map((interval, idx) => (
        <TableRow key={idx}>
          <TableCell
            sx={{ display: 'flex', flexDirection: 'row', borderTop: 'none', borderBottom: 'none', width: '70px' }}
          >
            <Typography variant={'body1'}>{interval.start.format('HH:mm')}</Typography>
            <Box
              sx={{
                position: 'absolute',
                height: '1px',
                marginTop: '11px',
                marginLeft: '70px',
                width: 'calc(100% - 70px)',
                backgroundColor: 'action.disabled',
              }}
            />
          </TableCell>
          {days.map((day, i) => (
            <TableCell
              key={i}
              sx={{
                borderRight: i === days.length - 1 ? 'none' : '1px solid grey',
                borderTop: 'none',
                borderBottom: 'none',
                width: i === 0 ? 'calc(3% + 7%)' : null,
              }}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
