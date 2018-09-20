import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import config from '../../config/SiteConfig'

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Container text>
      <h1>About</h1>
      <p>
        Learn Code from Us is a site that lists people who are members of underrepresented groups in tech who create resources geared towards programmers of all levels. These resources include (but are not limited to) podcasts, blog posts, newsletters, or YouTube videos. For now, this site is geared towards free resources in order to be as accessible as possible. <a href="https://dev.to/aspittel/introducing-learn-code-from-us-oe1">Here</a> is a blog post with more about the project.
      </p>
      <p>
        If you would like to be included on this list and identify as part of an underrepresented group in tech, please fill out <a href="https://airtable.com/shrYbUMMlR1iVpA1l">this form</a>!
      </p>
    </Container>
    <Footer />
  </div>
)

export default About
