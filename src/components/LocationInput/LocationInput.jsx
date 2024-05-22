import { Icon } from '..';
import styles from './LocationInput.module.css';

export const LocationInput = ({ handleChange }) => {
  return (
    <label className={styles.label}>
      <span className={styles.iconWrapper}>
        <Icon id="location" width="18" height="20" className={styles.icon} />
      </span>
      <input
        className={styles.input}
        type="text"
        placeholder="City"
        onChange={handleChange}
        autoComplete=""
      />
    </label>
  );
};
