import { SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import { TabTypes } from '../enums';
import { metadata, setQueryParams } from '../utils';
import { Day, Month, TimeIntervals, Week, Year } from '../types';

type metadata = Day | Week | Week[] | Month | Year | { date: string; intervals: TimeIntervals[] } | null;

export const useCalendar = () => {
  const [selectedTab, setSelectedTab] = useState<TabTypes>(TabTypes.DAY);
  const [data, setData] = useState<metadata>();

  const handleTabChange = (_: SyntheticEvent, newValue: SetStateAction<TabTypes>) => {
    setQueryParams({ tab: newValue.toString() });
    setSelectedTab(newValue);
  };

  useEffect(() => {
    const met: metadata = metadata(selectedTab);

    setData(met);
  }, [selectedTab]);

  console.log(data);

  return {
    data,
    selectedTab,
    handleTabChange,
  };
};
