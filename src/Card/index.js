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
        <SiteLink icon="fas fa-pencil-alt" title="Read our blog" link={project.Blog} />
        <SiteLink icon="fas fa-envelope" title="sign up for our newsletter" link={project.Newsletter} />
        <SiteLink icon="fab fa-youtube" title="subscribe to our YouTube channel" link={project.YouTube} />
        <SiteLink icon="fas fa-podcast" title="subscribe to our podcast" link={project.Podcast} />
        <SiteLink icon="fas fa-link" title="visit our website" link={project.Website} />
        <SiteLink icon="fab fa-dev" title="read our posts on dev.to" link={project.Dev} />
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
