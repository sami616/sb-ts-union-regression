import React from 'react'
import { Spinner, SpinnerProps } from './'
import { DocsPage } from '../../.storybook/components/DocsPage'

//x//////////////////////////////////////////////////
// Config
//x//////////////////////////////////////////////////

export default {
  title: 'UI/Elements/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      page: () => <DocsPage exports={['Spinner']} />,
    },
  },
}

//x//////////////////////////////////////////////////
// Default
//x//////////////////////////////////////////////////

export function Default(props: SpinnerProps) {
  return <Spinner {...props} />
}

Default.argTypes = {
  forwardRef: {
    control: {
      disable: true,
    },
  },
}
