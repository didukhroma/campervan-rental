import clsx from 'clsx';

import styles from './Description.module.css';

export const Description = ({ text, className }) => {
  return <p className={clsx(styles.description, className)}>{text}</p>;
};
