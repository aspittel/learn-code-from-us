import React, { Component } from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import { slide as Menu } from 'react-burger-menu'
import { Fade } from 'react-reveal'
import config from '../../../config/SiteConfig'
import styles from './Navigation.module.scss'
import './Headroom.scss'

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
    this.handleStateChange = this.handleStateChange.bind(this)
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <header>
        <Headroom calcHeightOnResize disableInlineStyles>
          <Fade down duration={2000} className={styles.wrapper}>
            <nav className={styles.navigation}>
              <span>
                <Link to="/about" activeClassName="active">
                  About
                </Link>
              </span>
            </nav>
            <div className={styles.name}>
              <span>
                <Link to="/">
                  <h3>{config.siteTitle}</h3>
                  <h4>People from underrepresented groups in tech who create awesome programming resources</h4>
                </Link>
              </span>
            </div>
          </Fade>
        </Headroom>
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavName}>
            <h3>{config.siteTitle}</h3>
          </div>
          <div className={styles.menu}>
            <Menu isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} width="100%">
              <Link to="/" onClick={() => this.closeMenu()}>
                <h1>{config.siteTitle}</h1>
              </Link>
              <Link to="/about" activeClassName="active" onClick={() => this.closeMenu()}>
                About
              </Link>
            </Menu>
          </div>
        </div>
      </header>
    )
  }
}
