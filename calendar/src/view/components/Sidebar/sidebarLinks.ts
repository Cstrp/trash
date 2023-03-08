import pill from './icon/pill.svg';
import schedule from './icon/schedule.svg';
import alarm from './icon/alarm.svg';
import { RouterPaths } from '../../../data/enums';
import { SidebarLinks } from '../../../data/types';

export const sidebarLinks: SidebarLinks[] = [
  {
    link: RouterPaths.DIARY,
    text: 'Мой дневник',
    icon: alarm,
  },
  {
    link: RouterPaths.COURSES,
    text: 'Мои курсы',
    icon: pill,
  },
  {
    link: RouterPaths.SCHEDULE,
    text: 'Мой график',
    icon: schedule,
  },
];
