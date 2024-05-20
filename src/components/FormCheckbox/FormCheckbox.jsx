import { FormField, Icon } from '../';
import styles from './FormCheckbox.module.css';
export const FormCheckbox = ({ name, options, width, height, handleClick }) => {
  return (
    <ul className={styles.list}>
      {options.map(el => (
        <li key={`${name}-${el}`}>
          <FormField type="checkbox" name={el} cbOnChange={handleClick}>
            <Icon id={el.toLowerCase()} width={width} height={height} />
          </FormField>
        </li>
      ))}
    </ul>
  );
};
