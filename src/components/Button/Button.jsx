import { useRef } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({ text, cbOnClick, bgColor }) => {
  const btnRef = useRef();

  const handleClick = () => {
    btnRef.current.blur();
    cbOnClick();
  };

  return (
    <button
      className={clsx(styles.button, bgColor && styles.buttonAccent)}
      type="button"
      onClick={handleClick}
      ref={btnRef}
    >
      {text}
    </button>
  );
};
