import { RoutePaths } from '../enums';
import { CalendarToday, NotificationsNone } from '@mui/icons-material';
import pill from '../../view/components/Sidebar/icon/pill.svg';
import { SidebarLinks } from '../types';

export const sidebarLinks: SidebarLinks[] = [
  {
    link: RoutePaths.DIARY,
    text: 'Мой дневник',
    icon: NotificationsNone,
  },
  {
    link: RoutePaths.COURSES,
    text: 'Мои курсы',
    icon: pill,
  },
  {
    link: RoutePaths.SCHEDULE,
    text: 'Мой график',
    icon: CalendarToday,
  },
];
