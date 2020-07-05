import React from 'react'
import { Title, Description, Source, Props } from '@storybook/addon-docs/blocks'

//x//////////////////////////////////////////////////
// DocsPage
//x//////////////////////////////////////////////////

export interface DocsPageProps {
  /** The names of the components available to import, the first item will be used in the import path */
  exports: string[]
  /** The components to append to the docs page */
  append?: React.ReactNode
  /** The story to generate docs from */
  story?: string
}

export function DocsPage({ exports = [], append, story = '^' }: DocsPageProps) {
  return (
    <>
      <Title />
      <Description />
      {exports.length && (
        <Source
          dark={true}
          code={`import { ${exports.join(', ')} } from 'components'`}
        />
      )}
      <Props story={story} />
      {append}
    </>
  )
}
