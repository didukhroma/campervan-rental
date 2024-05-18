import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({ text, cbOnClick, bgColor }) => {
  return (
    <button
      className={clsx(styles.button, bgColor && styles.buttonAccent)}
      type="button"
      onClick={cbOnClick}
    >
      {text}
    </button>
  );
};
