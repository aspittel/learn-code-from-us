import React from 'react'
import { shallow } from 'enzyme'
import Link from "../Link"
import Header from './index'

describe('Header', () => {
  it('render properly', () => {
    const wrapped = shallow(<Header />)
    expect(wrapped.find('a').length).toBe(1)
    expect(wrapped.find(Link).length).toBe(1)
  })

  it('should include a link to home view', () => {
    const wrapped = shallow(<Header />)
    expect(wrapped.find('a').prop('href')).toBe('/')
  })

  it('should include a link to about view', () => {
    const wrapped = shallow(<Header />)
    expect(wrapped.find(Link).prop('to')).toBe('/about')
  })
})

