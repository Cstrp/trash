export const capitalizeFirstLetter = (str: string): string => {
  return str.at(0)?.toUpperCase() + str.slice(1);
};
