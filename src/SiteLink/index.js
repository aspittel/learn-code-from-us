import React from 'react'
import PropTypes from 'prop-types'

import ReactTooltip from 'react-tooltip'

import './SiteLink.scss'

const SiteLink = ({ link, icon, tooltipText }) => {
  if (!link) return null

  return (
    <a
      href={link}
      data-tip={tooltipText}
      target='_blank'
      rel='noopener noreferrer'
    >
      <i className={`${icon} fa-2x`} />
      <ReactTooltip />
    </a>
  )
}

SiteLink.propTypes = {
  link: PropTypes.string,
  tooltipText: PropTypes.string,
  icon: PropTypes.string
}

export default SiteLink
