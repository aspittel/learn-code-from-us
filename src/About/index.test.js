import React from 'react'
import { shallow } from 'enzyme'
import About from './index'

describe('About', () => {
  it('render without crashing', () => {
    shallow(<About />)
  })

  it('has about css class name', () => {
    const wrapped = shallow(<About />)
    expect(wrapped.find('div').hasClass('about')).toBe(true)
  })
})

