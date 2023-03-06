import React from 'react';
import { CalendarTabsProps } from '../../../data/types';
import { Tab, Tabs } from '@mui/material';
import { tabs } from './Tabs';
import { activeStyles, styles } from '../../styles';

export const CalendarTabs = ({ selectedTab, handleTabChange }: CalendarTabsProps) => {
  return (
    <Tabs value={selectedTab} onChange={handleTabChange} sx={{ height: '100px' }}>
      {tabs.map((tab) => (
        <Tab key={tab.type} label={tab.label} value={tab.type} sx={selectedTab === tab.type ? activeStyles : styles} />
      ))}
    </Tabs>
  );
};
