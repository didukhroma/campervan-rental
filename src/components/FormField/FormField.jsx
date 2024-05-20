import styles from './FormField.module.css';

export const FormField = ({ type, placeholder, required, children, name }) => {
  return (
    <label>
      <span>{children}</span>
      <span>{name}</span>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
};
