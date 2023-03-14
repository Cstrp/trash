import React from 'react'
import { TooltipChildPropGetter } from './TooltipChildPropGetter'

export interface TooltipProps {
  text: string;
  children: (props: TooltipChildPropGetter) => React.ReactElement;
}
