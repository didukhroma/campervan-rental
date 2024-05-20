import { useRef } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({ text, cbOnClick, bgColor, type = 'button' }) => {
  const btnRef = useRef();

  const handleClick = () => {
    btnRef.current.blur();
    cbOnClick();
  };

  return (
    <button
      className={clsx(styles.button, bgColor && styles.buttonAccent)}
      type={type}
      onClick={cbOnClick && handleClick}
      ref={btnRef}
    >
      {text}
    </button>
  );
};
