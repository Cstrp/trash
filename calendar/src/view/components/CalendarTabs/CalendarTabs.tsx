import React from 'react';
import { CalendarTabsProps } from '../../../data/types';
import { Box, Tab, Tabs } from '@mui/material';
import { tabs } from './Tabs';
import { activeStyles, styles } from '../../styles';
import { TabTypes } from '../../../data/enums';
import { DayHeader } from '../DayHeader/DayHeader';
import { today } from '../../../data/utils';
import { TabButton } from '..';

export const CalendarTabs = ({ selectedTab, handleTabChange, handleTabReset }: CalendarTabsProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: selectedTab === TabTypes.DAY ? '1023px' : '100%',
      }}
    >
      {selectedTab === TabTypes.DAY && <DayHeader date={today} />}
      {selectedTab === TabTypes.WEEK && 'Week'}
      {selectedTab === TabTypes.MONTH && 'Month'}
      {selectedTab === TabTypes.YEAR && 'Year'}

      <Tabs value={selectedTab} onChange={handleTabChange} TabIndicatorProps={{ style: { display: 'none' } }}>
        {tabs.map((tab) => (
          <Tab
            key={tab.type}
            label={tab.label}
            value={tab.type}
            sx={selectedTab === tab.type ? activeStyles : styles}
          />
        ))}
      </Tabs>
      <TabButton selectedTab={selectedTab} handleTabReset={handleTabReset} />
    </Box>
  );
};
