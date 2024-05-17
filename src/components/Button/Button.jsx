import styles from './Button.module.css';

export const Button = ({ text, cbOnClick }) => {
  return (
    <button className={styles.button} type="button" onClick={cbOnClick}>
      {text}
    </button>
  );
};
