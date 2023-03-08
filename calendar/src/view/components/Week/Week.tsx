import { WeekViewProps } from '../../../data/types';
import { Table, TableContainer } from '@mui/material';
import { WeekHeader } from '../WeekHeader/WeekHeader';
import { WeekContent } from '../WeekContent/WeekContent';

export const Week = ({ calendarData }: WeekViewProps) => {
  return (
    <>
      <TableContainer sx={{ position: 'relative', overflowX: 'hidden' }}>
        <Table sx={{ tableLayout: 'fixed' }}>
          <WeekHeader days={calendarData.days} />
          <WeekContent days={calendarData.days} intervals={calendarData.intervals} />
        </Table>
      </TableContainer>
    </>
  );
};
