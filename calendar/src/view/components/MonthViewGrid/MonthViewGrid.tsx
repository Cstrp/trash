import moment from 'moment';
import { isSelectedDay, momentFormat } from '../../../data/utils';
import style from './monthViewGrid.module.scss';
import { Grid, Typography } from '@mui/material';
import { MonthViewGridProps } from './MonthViewGridProps';

export const MonthViewGrid = ({ month, selectedDay, onSelectDay }: MonthViewGridProps): JSX.Element => {
  const handleSelection = (item: moment.Moment) => {
    !item.isSame(selectedDay, 'day') && onSelectDay(item);
  };
  return (
    <>
      {month.map((week, i) => (
        <Grid key={i} container item className={style.week}>
          {week.days.map((day, j) => (
            <Grid
              key={j}
              item
              style={isSelectedDay(day)}
              className={style.days}
              onClick={() => handleSelection(day.day)}
            >
              <Typography
                variant='subtitle1'
                fontSize={'inherit'}
                className={style.day}
                sx={{
                  position: 'absolute',
                  top: '13px',
                  right: '13px',
                  textAlign: 'right',
                  fontSize: '16px',
                  lineHeight: '20px',
                  fontWeight: 400,
                  backgroundColor: day.active ? 'action.selected' : null,
                  borderRadius: '100%',
                  color: day.active ? 'primary.main' : 'text.primary',
                }}
              >
                {momentFormat(day.day, 'DD')}
              </Typography>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
};
