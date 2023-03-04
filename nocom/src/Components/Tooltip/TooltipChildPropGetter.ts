import { TooltipChildProps } from './TooltipChildProps'

export type TooltipChildPropGetter = <Props extends object>(
  baseProps: Props
) => Props & TooltipChildProps;
