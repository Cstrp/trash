import { RoutePaths } from '../enums';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export interface SidebarLinks {
  link?: RoutePaths;
  text: string;
  icon: OverridableComponent<SvgIconTypeMap> | string;
}
