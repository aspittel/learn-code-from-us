import React from 'react'
import { shallow } from 'enzyme'
import ReactTooltip from "react-tooltip"

import SiteLink from './index'

describe('SiteLink', () => {
  it('render properly', () => {
    const wrapped = shallow(<SiteLink link="http://google.com"/>)
    expect(wrapped.find('a').length).toBe(1)
    expect(wrapped.find('i').length).toBe(1)
    expect(wrapped.find(ReactTooltip).length).toBe(1)
  })

  it('should render nothing if not link prop', () => {
    const wrapped = shallow(<SiteLink />)
    expect(wrapped.find('a').length).toBe(0)
    expect(wrapped.find('i').length).toBe(0)
    expect(wrapped.find(ReactTooltip).length).toBe(0)
  })
})

