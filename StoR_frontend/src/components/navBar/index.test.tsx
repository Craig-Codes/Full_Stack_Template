import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'
import NavBar from '.'


test('Check navbar is rendered containing news tab', () => {
  // ARRANGE
  render(<NavBar/>);

  // ACT
  const text = screen.getByText('News')

  // ASSERT
  expect(text).toBeInTheDocument();
})
