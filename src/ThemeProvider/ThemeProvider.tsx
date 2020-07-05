import React from 'react'
import cn from 'classnames'
import * as themes from '../shared/themes'
import './ThemeProvider.scss'
import type { ThemeProviderProps } from './ThemeProviderTypes'

//x//////////////////////////////////////////////////
// ThemeProvider
//x//////////////////////////////////////////////////

/** This is the `ThemeProvider` component description */

export function ThemeProvider({
  children,
  themeName = 'myTheme',
}: ThemeProviderProps) {
  React.useLayoutEffect(() => {
    // Set css variables
    Object.entries(themes[themeName]).forEach(([parentKey, parentValue]) => {
      Object.entries(parentValue).forEach(([childKey, childValue]) => {
        document.documentElement.style.setProperty(
          `--theme-${parentKey}-${childKey}`,
          childValue as string
        )
      })
    })
  }, [themeName])

  return <div className={cn('ThemeProvider', themeName)}>{children}</div>
}
