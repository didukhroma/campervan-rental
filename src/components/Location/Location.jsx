import { Icon } from '../';

import styles from './Location.module.css';

export const Location = ({ city, country }) => {
  return (
    <p className={styles.location}>
      <Icon id="location" width="16" height="16" />
      <span>{`${city}, ${country}`}</span>
    </p>
  );
};
