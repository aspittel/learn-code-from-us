import React from 'react'
import Link from 'gatsby-link'
import styles from './SiteLink.module.scss'

const SiteLink = ({ children, link, tooltipText }) => {
  if (link && link !== "#") {
    return (
      <a target="_blank" href={link} className={styles.link} data-tip={tooltipText}>
        {children}
      </a>
    )
  }
  return ''
}

export default SiteLink
