import React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import SiteLink from '../SiteLink'
import './Card.scss'

const Card = props => {
  let project = props.person.fields;
  return (
    <ReactCSSTransitionGroup
      transitionName="slideUp"
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnter={false}
      transitionLeave={false}>
    <div className="content">
      <h2>{project.Name}</h2>
      {project.Image && (
        <div className="profileImageContainer">
          <img
            src={project.Image[0].thumbnails.large.url}
            alt={"Picture of " + project.Name}
            className="profileImage"
          />
        </div>
      )}
      <div className="links">
        <SiteLink
          icon="fas fa-pencil-alt"
          title="Read our blog"
          link={project.Blog}
          tooltipText="blog"
        />
        <SiteLink
          icon="fas fa-envelope"
          title="sign up for our newsletter"
          link={project.Newsletter}
          tooltipText="newsletter"
        />
        <SiteLink
          icon="fab fa-youtube"
          title="subscribe to our YouTube channel"
          link={project.YouTube}
          tooltipText="YouTube"
        />
        <SiteLink
          icon="fas fa-podcast"
          title="subscribe to our podcast"
          link={project.Podcast}
          tooltipText="podcast"
        />
        <SiteLink
          icon="fas fa-link"
          title="visit our website"
          link={project.Website}
          tooltipText="website"
        />
        <SiteLink
          icon="fab fa-dev"
          title="read our posts on dev.to"
          link={project.Dev}
          tooltipText="dev.to"
        />
      </div>
      <h3>{project.About}</h3>
      <div className='tags'>
        {project.Tags &&
          project.Tags.map(tag => (
            <div key={tag} className='tag'>
              {tag}
            </div>
          ))}
      </div>
      </div>
    </ReactCSSTransitionGroup>
  )
}


Card.propTypes = {
  person: PropTypes.shape({
    fields: PropTypes.shape({
      name: PropTypes.string,
      Image: PropTypes.array,
      Blog: PropTypes.string,
      Newsletter: PropTypes.string,
      YouTube: PropTypes.string,
      Podcast: PropTypes.string,
      Website: PropTypes.string,
      Dev: PropTypes.string,
      About: PropTypes.string,
      Tags: PropTypes.array
    })
  })
}

export default Card
