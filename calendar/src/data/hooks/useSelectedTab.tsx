import { SetStateAction, SyntheticEvent, useState } from 'react';
import { TabTypes } from '../enums';
import { metadata, setQueryParams } from '../utils';

export const useSelectedTab = () => {
  const [selectedTab, setSelectedTab] = useState<TabTypes>(TabTypes.DAY);

  const handleTabChange = (_: SyntheticEvent, newValue: SetStateAction<TabTypes>) => {
    setQueryParams({ tab: newValue.toString() });
    setSelectedTab(newValue);
  };

  const meta = metadata(selectedTab);

  console.log(meta);

  return {
    selectedTab,
    handleTabChange,
  };
};
