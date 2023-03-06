import { WeekViewProps } from '../../../data/types';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { WeekViewHeader } from '../WeekViewHeader/WeekViewHeader';

export const WeekView = ({ calendarData }: WeekViewProps) => {
  return (
    <>
      <WeekViewHeader days={calendarData.days} />
      <TableContainer sx={{ position: 'relative', marginLeft: '-200px', width: '1490px', maxHeight: '788px' }}>
        <Table sx={{ tableLayout: 'fixed' }}>
          <TableBody>
            {calendarData?.intervals?.map((interval, idx) => (
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
                {calendarData.days.map((day, i) => (
                  <TableCell
                    key={i}
                    sx={{
                      borderRight: i === calendarData.days.length - 1 ? 'none' : '1px solid grey',
                      borderTop: 'none',
                      borderBottom: 'none',
                      width: i === 0 ? 'calc(3% + 7%)' : null,
                    }}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
