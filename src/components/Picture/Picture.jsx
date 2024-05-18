import styles from './Picture.module.css';

export const Picture = ({ name, src }) => {
  return (
    <div className={styles.imgWrapper}>
      <img className={styles.img} src={src} alt={name} loading="lazy" />
    </div>
  );
};
