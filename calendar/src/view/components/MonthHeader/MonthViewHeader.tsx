import moment from 'moment';
import { momentFormat } from '../../../data/utils';
import style from './monthViewHeader.module.scss';

export type MonthViewHeaderProps = {
  date: moment.Moment;
};

export const MonthViewHeader = ({ date }: MonthViewHeaderProps): JSX.Element => {
  return (
    <div className={style.header}>
      <h5 className={style.title}>{momentFormat(date, 'MMMM YYYY')}</h5>
    </div>
  );
};
