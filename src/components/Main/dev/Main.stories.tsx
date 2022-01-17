import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Main } from '..'

type Type = typeof Main

export default {
  title: 'Main',
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<Type>

export const Default: ComponentStory<Type> = (args) => <Main {...args} />
Default.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS e Styled Component'
}

export const LargeTexts: ComponentStory<Type> = (args) => <Main {...args} />
LargeTexts.args = {
  title: 'Curso de React Avançado do professor Willian Justen',
  description:
    'A aplicação utiliza as seguintes tecnologias - TypeScript, ReactJS e Styled Component'
}
