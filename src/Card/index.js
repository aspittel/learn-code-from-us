import React from "react"
import SiteLink from "../SiteLink"
import "./Card.scss"

const tag = () => {

}

export default props => {
  let project = props.person.fields
  return (
    <div className="content">
      <h2>{project.Name}</h2>
      {project.Image && (
        <img
          src={project.Image[0].url}
          alt={"Picture of " + project.Name}
          className="profileImage"
        />
      )}
      <div className="links">
        <SiteLink aria-hidden icon="fas fa-pencil-alt" aria-label="Read our blog" link={project.Blog} tooltipText='blog'/>
        <SiteLink aria-hidden icon="fas fa-envelope" aria-label="sign up for our newsletter" link={project.Newsletter} tooltipText='newsletter'/>
        <SiteLink aria-hidden icon="fab fa-youtube" aria-label="subscribe to our YouTube channel" link={project.YouTube} tooltipText='YouTube'/>
        <SiteLink aria-hidden icon="fas fa-podcast" aria-label="subscribe to our podcast" link={project.Podcast} tooltipText='podcast'/>
        <SiteLink aria-hidden icon="fas fa-link" aria-label="visit our website" link={project.Website} tooltipText='website'/>
        <SiteLink aria-hidden icon="fab fa-dev" aria-label="read our posts on dev.to" link={project.Dev} tooltipText='dev.to'/>
      </div>
      <h3>{project.About}</h3>
      <div className="tags">
        {project.Tags &&
          project.Tags.map(tag => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
      </div>
    </div>
  )
}
