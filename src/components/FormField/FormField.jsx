import styles from './FormField.module.css';

export const FormField = ({ type, placeholder }) => {
  return (
    <label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required
      />
    </label>
  );
};
