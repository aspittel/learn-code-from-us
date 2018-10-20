import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'
import SiteLink from '../SiteLink'

describe('Card', () => {
  let person = {
    fields: {
      Name: 'Jane Doe',
      Blog: 'https://example.com/blog'
    }
  }

  it('render properly', () => {
    const wrapped = shallow(<Card person={person}/>)
    expect(wrapped.find('h2').text()).toBe(person.fields.Name)
    expect(wrapped.find(SiteLink).length).toBe(6)
  })

  describe('Image', () => {
    it('does not render image if not present', () => {
      const wrapped = shallow(<Card person={person}/>)
      expect(wrapped.find('img').length).toBe(0)
    })

    it('renders an image if present in data', () => {
      const data = {
        fields: {
          Image: ['http://example.com/image.jpg'],
          ...person.fields
        }
      }

      const wrapped = shallow(<Card person={data}/>)
      expect(wrapped.find('img').length).toBe(1)
    })
  })
})

