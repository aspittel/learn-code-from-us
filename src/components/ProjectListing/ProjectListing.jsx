import React from 'react'
import styles from './ProjectListing.module.scss'
import { FaNewspaper, FaYoutube, FaPodcast, FaLink, FaPencilAlt } from 'react-icons/fa'
import SiteLink from '../SiteLink/SiteLink'
import ReactTooltip from 'react-tooltip'

export default class ProjectListing extends React.PureComponent {
  shuffle() {
    // randomize the order of the profiles
    let a = this.props.projectEdges
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
    }
    return a
  }

  render() {
    const profiles = this.shuffle()
    return (
      <div className={styles.base}>
        {profiles.map(project => (
          <div key={project.node.slug} className={styles.wrapper}>
            <div className={styles.content}>
              <h2>{project.node.Name}</h2>
              <img src={project.node.Image[0].url} alt={"Picture of " + project.node.Name} className={styles.profileImage}/>
              <div className={styles.links}>
                <SiteLink link={project.node.Blog} tooltipText="blog">
                  <FaPencilAlt size={24}/>
                </SiteLink>
                <SiteLink link={project.node.Newsletter} tooltipText="newsletter">
                  <FaNewspaper size={24} />
                </SiteLink>
                <SiteLink link={project.node.YouTube} tooltipText="YouTube">
                  <FaYoutube size={24}/>
                </SiteLink>
                <SiteLink link={project.node.Podcast} tooltipText="podcast">
                  <FaPodcast size={24}/>
                </SiteLink>
                <SiteLink link={project.node.Website} tooltipText="website">
                  <FaLink size={24}/>
                </SiteLink>
              </div>
              <h3>{project.node.About}</h3>
              <div className={styles.tags}>{project.node.Tags.map(tag => (
                <div className={styles.tag} key={tag}>{tag}</div>
              ))}</div>
            </div>
            <ReactTooltip />
          </div>
        ))}
      </div>
    );
  }
}


