import styles from './Error.module.css';

export const Error = ({ message }) => {
  return (
    <>
      <p className={styles.text}>{message}</p>
      <p className={styles.text}>Please try again after a few moments</p>
    </>
  );
};
