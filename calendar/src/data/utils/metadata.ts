import { TabTypes } from "../enums";
import { getYear } from "./GetYear";
import { today } from "./Today";
import { getMonth } from "./GetMonth";
import { getWeek } from "./GetWeek";
import { getDay } from "./GetDay";

export const metadata = (tab: TabTypes) => {
  switch (tab) {
    case TabTypes.YEAR:
      return getYear(today);
    case TabTypes.MONTH:
      return getMonth(today);
    case TabTypes.WEEK:
      return getWeek(today);
    case TabTypes.DAY:
      return getDay(today);
    default:
      return "Hello world";
  }
};
