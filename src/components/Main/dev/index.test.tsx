import { render, screen } from '@testing-library/react'

import { Main } from '..'

describe('Main', () => {
  it('deve renderizar o heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('deve renderizar igual ao snapshot', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve renderizar a com a cor de background correta', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
