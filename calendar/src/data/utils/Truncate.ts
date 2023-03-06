import { TruncateOptions } from '../types';

export const truncate = (items: string[], options: TruncateOptions): string[] => {
  const { separator, maxLength } = options;
  const truncItems = items.slice(0, maxLength);

  if (items.length <= maxLength) {
    return truncItems;
  }

  return [...truncItems, `${separator} ${items.length - maxLength}... `];
};
