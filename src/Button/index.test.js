import React from 'react'
import Button from '.'

import { render } from '@testing-library/react'

describe('Button', () => {
  it('is truthy', () => {
    const { queryByText } = render(<Button message='test' />)

    expect(queryByText('test')).toBeTruthy()
  })
})
