import { Day } from "../types";

export const isSelectedDay = (day: Day) => {
  return {
    backgroundColor: day.selected
      ? "#CCCCCC4D"
      : day.selected
      ? "#ccc"
      : "#fff",
    opacity: day.disabled ? 0.4 : undefined,
    filter: day.disabled ? "blur(.8px)" : undefined,
    cursor: day.disabled ? "default" : "pointer",
  };
};
