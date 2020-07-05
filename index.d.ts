declare module '*.mdx'
declare module '*.woff'
declare module '*.svg'

import * as CSS from 'csstype'

declare module 'csstype' {
  interface Properties {
    [index: string]: any
  }
}
