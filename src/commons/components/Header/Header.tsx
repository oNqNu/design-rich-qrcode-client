import React from 'react';
import styles from './Header.module.css';
import LinkIcon from '../LinkIcon/LinkIcon';
import { GithubIcon } from '../icons/icons/GithubIcon/GithubIcon';

type HeaderProps = {};
const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles['title-wrapper']}>
        <a className={styles.title} href="/">
          Design Rich QR
        </a>
      </div>
      <LinkIcon href="https://github.com/oNqNu" isExternalLink={true}>
        <GithubIcon size={24} />
      </LinkIcon>
    </header>
  );
};

export default Header;
