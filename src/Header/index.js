import React from 'react'
import Link from '../Link'
import './Header.scss'

const Header = props => {

  // If current page is home, return true.
  const isCurrentPageHome = () => {
    const pages = window.location.href.split('/');
    const currentPage = pages[pages.length-1];
    return currentPage === '';
  }

  const aboutLink = (<Link to='/about' className='link'> About this Site </Link>);
  const homeLink = (<Link to='/' className='link'> Return to Home </Link>);

  return (
    <header>
      <h1>
        <Link to='/'>Learn Code from Us</Link>
      </h1>
      <h4>
        People from underrepresented groups in tech who create awesome
        programming resources
      </h4>
      {
        isCurrentPageHome() ? aboutLink : homeLink
      } 
    </header>
  )
}

export default Header
