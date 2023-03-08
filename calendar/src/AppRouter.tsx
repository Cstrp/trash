import { createBrowserRouter } from 'react-router-dom';
import { Courses, Diary, Home, Schedule, Settings } from './view/pages';
import { Calendar } from './view/components';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/diary',
    element: <Diary />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/schedule',
    element: <Schedule />,
    children: [
      {
        index: true,
        element: <Calendar />,
      },
    ],
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);
