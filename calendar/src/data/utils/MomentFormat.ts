import moment from "moment";

export const momentFormat = (
  m: moment.Moment,
  format = "MMMM YYYY"
): string => {
  return m.format(format);
};
