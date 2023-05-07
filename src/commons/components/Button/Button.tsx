import React from 'react';
import styles from '../Button/Button.module.css';
import classnames from 'classnames';

type BottomButtonProps = {
  variant: 'primary' | 'secondary' | `danger`;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Button = (props: BottomButtonProps) => {
  return (
    <button className={classnames(styles.button, styles[props.variant])}>
      {props.children}
    </button>
  );
};
