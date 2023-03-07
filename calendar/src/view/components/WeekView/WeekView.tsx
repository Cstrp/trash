import { WeekViewProps } from '../../../data/types';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export const WeekView = ({ calendarData }: WeekViewProps) => {
  return (
    <>
      <TableContainer sx={{ position: 'relative', overflowX: 'hidden' }}>
        <Table sx={{ tableLayout: 'fixed' }}>
          <TableHead>
            {}
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
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
