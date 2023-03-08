import { CalendarToday, NotificationsNone } from '@mui/icons-material';
import pill from './icon/pill.svg';
import { RoutePaths } from '../../../data/enums';
import { SidebarLinks } from '../../../data/types';

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
