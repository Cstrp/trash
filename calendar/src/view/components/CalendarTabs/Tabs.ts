import { TabView } from "../../../data/types";
import { TabTypes } from "../../../data/enums";

export const tabs: TabView[] = [
  { label: "День", type: TabTypes.DAY },
  { label: "Неделя", type: TabTypes.WEEK },
  { label: "Месяц", type: TabTypes.MONTH },
  { label: "Год", type: TabTypes.YEAR },
];
