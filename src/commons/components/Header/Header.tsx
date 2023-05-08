import React from 'react';
import styles from './Header.module.css';
import LinkIcon from '../LinkIcon/LinkIcon';
import { GithubIcon } from '../icons/icons/GithubIcon/GithubIcon';

type HeaderProps = {};
const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>Design Rich QR</h1>
      <LinkIcon href="https://github.com/oNqNu" isExternalLink={true}>
        <GithubIcon size={24} />
      </LinkIcon>
    </header>
  );
};

export default Header;