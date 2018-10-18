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
        <SiteLink icon="fas fa-pencil-alt" link={project.Blog} tooltipText='blog'/>
        <SiteLink icon="fas fa-envelope" link={project.Newsletter} tooltipText='newsletter'/>
        <SiteLink icon="fab fa-youtube" link={project.YouTube} tooltipText='YouTube'/>
        <SiteLink icon="fas fa-podcast" link={project.Podcast} tooltipText='podcast'/>
        <SiteLink icon="fas fa-link" link={project.Website} tooltipText='website'/>
        <SiteLink icon="fab fa-dev" link={project.Dev} tooltipText='dev.to'/>
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
