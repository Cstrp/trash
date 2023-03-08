import { Box, Typography } from '@mui/material';
import { momentFormat } from '../../../data/utils';
import { DayViewHeaderProps } from 'src/data/types';

export const DayHeader = ({ date }: DayViewHeaderProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        mb: 2,
      }}
    >
      <Typography variant='h5' letterSpacing={1} sx={{ color: 'text.primary' }}>
        {momentFormat(date, 'D MMMM YYYY')}
      </Typography>
      <Typography variant='h6' letterSpacing={1} sx={{ color: 'text.primary' }}>
        {momentFormat(date, 'dddd')}
      </Typography>
    </Box>
  );
};
