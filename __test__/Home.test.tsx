import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render title text', () => {
  render(<Home />)
  expect(
    screen.getByText(
      'Discover and deploy boilerplate example Next.js projects.'
    )
  ).toBeInTheDocument()
})
