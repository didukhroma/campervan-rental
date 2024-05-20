import {
  prepareInfo,
  prepareInfoForm,
} from '../../helpers/prepareFeaturesInfo';
import styles from './VehicleDetails.module.css';
export const VehicleDetails = ({
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  const formText = prepareInfoForm(form);
  const lengthText = prepareInfo(length, 'm');
  const widthText = prepareInfo(width, 'm');
  const heightText = prepareInfo(height, 'm');
  const tankText = prepareInfo(tank, 'l');

  return (
    <div>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Vehicle details</h3>
      </div>

      <ul className={styles.list}>
        <li>
          <p className={styles.text}>
            <span>Form</span>
            <span>{formText}</span>
          </p>
        </li>
        <li>
          <p className={styles.text}>
            <span>Length</span>
            <span>{lengthText}</span>
          </p>
        </li>
        <li>
          <p className={styles.text}>
            <span>Width</span>
            <span>{widthText}</span>
          </p>
        </li>
        <li>
          <p className={styles.text}>
            <span>Height</span>
            <span>{heightText}</span>
          </p>
        </li>
        <li>
          <p className={styles.text}>
            <span>Tank</span>
            <span>{tankText}</span>
          </p>
        </li>
        <li>
          <p className={styles.text}>
            <span>Consumption</span>
            <span>{consumption}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
