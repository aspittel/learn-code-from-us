import React from 'react';
import styles from './Footer.module.scss';
import config from '../../../config/SiteConfig';

const Footer = () => (
  <footer className={styles.footer}>
    {config.copyright}
  </footer>
);

export default Footer;
