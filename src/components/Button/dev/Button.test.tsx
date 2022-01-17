import { render, screen } from '@testing-library/react'

import { Button } from '..'

describe('Button', () => {
  it('deve renderizar o heading', () => {
    render(<Button />)

    expect(screen.getByRole('heading', { name: /button/i })).toBeInTheDocument()
  })

  // it('deve renderizar igual ao snapshot', () => {
  //  const { container } = render(<Button />)
  //
  //  expect(container.firstChild).toMatchSnapshot()
  // })
})
