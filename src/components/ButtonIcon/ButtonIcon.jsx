import clsx from 'clsx';

import { Icon } from '../';

import styles from './ButtonIcon.module.css';

export const ButtonIcon = ({ iconId, cbOnClick, trigger }) => {
  return (
    <button type="button" onClick={cbOnClick} className={styles.favorites}>
      <Icon
        id={iconId}
        className={clsx(styles.icon, trigger && styles.iconAccent)}
        width="24"
        height="24"
      />
    </button>
  );
};
