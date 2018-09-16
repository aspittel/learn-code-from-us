import React from 'react'
import Link from 'gatsby-link'
import styles from './SiteLink.module.scss'

const SiteLink = ({ children, link, tooltipText }) => {
  if (link && link !== "#") {
    return (
      <Link target="_blank" to={"//" + link} className={styles.link} data-tip={tooltipText}>
        {children}
      </Link>
    )
  }
  return ''
}

export default SiteLink
