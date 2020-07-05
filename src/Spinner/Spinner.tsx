import React from 'react'
import cn from 'classnames'
import './Spinner.scss'
import type { SpinnerProps } from './SpinnerTypes'

//x//////////////////////////////////////////////////
// Spinner
//x//////////////////////////////////////////////////

/** This is the `Spinner` component description */

export function Spinner({
  size = '6',
  color = 'primaryBase',
  forwardRef,
  className,
  style,
  ...htmlProps
}: SpinnerProps) {
  return (
    <div
      style={{
        '--Spinner-size': `var(--theme-size-${size})`,
        '--Spinner-color': `var(--theme-color-${color})`,
        ...style,
      }}
      className={cn('Spinner', className)}
      ref={forwardRef}
      {...htmlProps}
    />
  )
}
