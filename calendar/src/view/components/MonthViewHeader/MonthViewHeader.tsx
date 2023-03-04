import moment from "moment";
import { ChevronLeftSharp, ChevronRightSharp } from "@mui/icons-material";
import { momentFormat } from "../../../data/utils";
import style from "./monthViewHeader.module.scss";

export type MonthViewHeaderProps = {
  date: moment.Moment;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

export const MonthViewHeader = ({
  date,
  onPrevMonth,
  onNextMonth,
}: MonthViewHeaderProps): JSX.Element => {
  return (
    <div className={style.header}>
      <button className={style.btn} onClick={onPrevMonth}>
        <ChevronLeftSharp />
      </button>
      <h5 className={style.title}>{momentFormat(date, "MMMM YYYY")}</h5>
      <button className={style.btn} onClick={onNextMonth}>
        <ChevronRightSharp />
      </button>
    </div>
  );
};
