import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '..'

type Type = typeof Button

export default {
  title: 'Button'
  // argTypes: {}
} as ComponentMeta<Type>

export const Default: ComponentStory<Type> = () => <Button />
// export const Default: ComponentStory<Type> = (args) => <Button {...args} />
// Default.args = {}
