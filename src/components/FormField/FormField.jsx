import clsx from 'clsx';
import styles from './FormField.module.css';

export const FormField = ({ type, placeholder, required, children, name }) => {
  return (
    <label>
      {children && <span>{children}</span>}
      {children && <span>{name}</span>}
      <input
        className={clsx(styles.input, type === 'textarea' && styles.textArea)}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength="2"
      />
    </label>
  );
};
