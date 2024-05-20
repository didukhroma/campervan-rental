import clsx from 'clsx';
import styles from './ModalTabs.module.css';

export const ModalTabs = ({ activeTab, handleClick }) => {
  return (
    <ul className={styles.list}>
      <li>
        <button
          className={clsx(styles.button, !activeTab && styles.active)}
          type="button"
          onClick={handleClick}
        >
          <span>Features</span>
        </button>
      </li>
      <li>
        <button
          className={clsx(styles.button, activeTab && styles.active)}
          type="button"
          onClick={handleClick}
        >
          <span>Reviews</span>
        </button>
      </li>
    </ul>
  );
};
