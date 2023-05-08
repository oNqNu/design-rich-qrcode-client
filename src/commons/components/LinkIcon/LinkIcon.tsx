import React from 'react';
import { ReactElement } from 'react';
import styles from './LinkIcon.module.css';

type LinkIconProps = {
  href?: string;
  children: ReactElement;
  isExternalLink?: boolean;
};

export const LinkIcon = ({
  href = '/',
  isExternalLink = false,
  children,
}: LinkIconProps) => {
  return (
    <a
      className={styles['link-icon']}
      href={href}
      target={isExternalLink && '_blanks'}
      rel={isExternalLink && 'noopener noreferrer'}
    >
      {children}
    </a>
  );
};
