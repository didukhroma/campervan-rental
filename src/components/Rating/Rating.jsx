import { Icon } from '../';
import styles from './Rating.module.css';

export const Rating = ({ rating, reviews }) => {
  return (
    <p className={styles.rating}>
      <Icon id="rating-star" className={styles.icon} />
      <span className={styles.text}>{`${rating} ${
        reviews && `(${reviews} Reviews)`
      } `}</span>
    </p>
  );
};
