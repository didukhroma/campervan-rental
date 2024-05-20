import { FormField, FormCheckbox } from '../';
import styles from './Filtes.module.css';
export const Filters = () => {
  return (
    <form className={styles.form}>
      <h3>Location</h3>

      <FormField type="text" placeholder="City" />
      <h3>Filters</h3>
      <h4>Vehicle equipment</h4>
      <FormCheckbox />
      <h4>Vehicle type</h4>
    </form>
  );
};
