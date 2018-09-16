import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import ProjectListing from '../components/ProjectListing/ProjectListing'
import Footer from '../components/Footer/Footer'

const Index = props => {
  console.log(props)
  const projectEdges = props.data.allAirtable.edges
  console.log(projectEdges)
  return (
    <div className="container index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <div>
        <ProjectListing projectEdges={projectEdges} />
      </div>
      <Footer />
    </div>
  )
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allAirtable {
      edges {
        node {
          slug
          Tags
          Blog
          YouTube
          Podcast
          Name
          Website
          About
          Newsletter
          Image {
            url
          }
        }
      }
    }
  }
`
