import React from 'react'
import ReactTooltip from 'react-tooltip'

import './SiteLink.scss'

export default ({ link, icon, tooltipText }) => {
  if (!link) return null

  return (
    <a href={link} data-tip={tooltipText} target='_blank' rel='noopener noreferrer'>
      <i className={`${icon} fa-2x`} />
      <ReactTooltip />
    </a>
  )
}
