import React from 'react'
import { shallow } from 'enzyme'
import data from '../data.json'
import Card from "../Card"
import Profiles from './index'

describe('Profiles', () => {
  it('render properly', () => {
    const wrapped = shallow(<Profiles/>)
    expect(wrapped.find(Card).length).toBe(data.length)
  })
})

