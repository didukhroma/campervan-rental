import clsx from 'clsx';
import styles from './FormField.module.css';
import { currentDate } from '../../helpers/currentDate';

export const FormField = ({
  type,
  placeholder,
  required,
  children,
  name,
  minLength,
  cbOnChange,
  value,
  rows,
}) => {
  return (
    <label className={clsx(children && styles.label)}>
      {children && <span>{children}</span>}
      {children && <span className={styles.text}>{name}</span>}
      {type === 'textarea' ? (
        <textarea
          className={clsx(styles.input, styles.textArea)}
          type={type}
          name={name}
          placeholder={placeholder}
          minLength={minLength}
          min={type === 'date' ? currentDate() : ''}
          onChange={cbOnChange}
          value={value}
          rows={rows}
        ></textarea>
      ) : (
        <input
          className={clsx(styles.input, children && styles.visuallyHidden)}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          min={type === 'date' ? currentDate() : ''}
          onChange={cbOnChange}
          value={value}
        />
      )}
    </label>
  );
};
