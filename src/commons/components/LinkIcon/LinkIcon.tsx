import React from 'react';
import { ReactElement } from 'react';
import styles from './LinkIcon.module.css';

type LinkIconProps = {
  href?: string;
  children: ReactElement;
  isExternalLink?: boolean;
};

const LinkIcon = ({
  href,
  isExternalLink = false,
  children,
}: LinkIconProps) => (
  <a
    className={styles.linkIcon}
    href={href}
    target={isExternalLink ? '_blank' : undefined}
    rel={isExternalLink ? 'noopener noreferrer' : undefined}
  >
    {children}
  </a>
);

export default LinkIcon;
