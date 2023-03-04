import React, { useLayoutEffect, useRef, useState } from 'react'
import { TooltipProps } from './TooltipProps'
import { Portal } from '../../Portal'

type Position = {
  top: number
  left: number
}

export const Tooltip = ({ children, text }: TooltipProps): JSX.Element => {
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 })
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const tooltipElement = tooltipRef.current

    if (!anchorElement || !tooltipElement) return

    const anchorRect = anchorElement.getBoundingClientRect()
    const tooltipRect = tooltipElement.getBoundingClientRect()

    const TOP = 5

    setPosition({
      top: anchorRect.top - tooltipRect.height - TOP,
      left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2
    })

  }, [anchorElement])

  const propsGetter = (props: Record<string, unknown>) => {
    const { onMouseEnter, onMouseLeave } = props

    return {
      ...props,
      onMouseEnter: (evt: React.MouseEvent<HTMLElement>) => {
        if (typeof onMouseEnter === 'function') onMouseEnter(evt)
        setAnchorElement(null)
      },
      onMouseLeave: (evt: React.MouseEvent<HTMLElement>) => {
        if (typeof onMouseLeave === 'function') onMouseLeave(evt)
        setAnchorElement(evt.currentTarget)
      }
    }
  }

  return (
    <>
      {anchorElement && (
        <Portal>
          <div ref={tooltipRef} style={{ top: position.top, left: position.left }}>{text}</div>
        </Portal>
      )}
      {children(propsGetter as never)}
    </>
  )
}
