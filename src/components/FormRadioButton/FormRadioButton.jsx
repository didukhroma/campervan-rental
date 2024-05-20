import { Icon } from '../Icon/Icon';

import styles from './FormRadioButton.module.css';

export const FormRadioButton = ({ handleChangeType }) => {
  const cbOnChange = e => {
    handleChangeType(e.target.value);
  };
  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label}>
        <span>
          <Icon id="van" width="40" height="28" />
        </span>
        <span className={styles.text}>Van</span>
        <input
          onChange={cbOnChange}
          className={styles.input}
          type="radio"
          name="vehicleType"
          value="panelTruck"
        />
      </label>
      <label className={styles.label}>
        <span>
          <Icon id="fully-integrated" width="40" height="28" />
        </span>
        <span className={styles.text}>Fully Integrated</span>
        <input
          onChange={cbOnChange}
          className={styles.input}
          type="radio"
          name="vehicleType"
          value="fullyIntegrated"
        />
      </label>
      <label className={styles.label}>
        <span>
          <Icon id="alcove" width="40" height="28" />
        </span>
        <span className={styles.text}>Alcove</span>
        <input
          onChange={cbOnChange}
          className={styles.input}
          type="radio"
          name="vehicleType"
          value="alcove"
        />
      </label>
    </fieldset>
  );
};
