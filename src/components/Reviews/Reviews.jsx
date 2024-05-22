import clsx from 'clsx';
import { Icon } from '..';
import styles from './Reviews.module.css';

export const Reviews = ({ data }) => {
  const rating = [];
  const totalStars = 5;

  if (!data) return;

  for (let i = 1; i <= totalStars; i++) {
    rating.push(<Icon id="rating-star" className={styles.ratingIcon} />);
  }

  return (
    <ul className={styles.list}>
      {data.map(({ reviewer_name, reviewer_rating, comment }) => {
        const iconText = reviewer_name[0].toUpperCase();
        return (
          <li key={`${reviewer_name}-${comment.length}`}>
            <div className={styles.wrapper}>
              <p className={styles.icon}>{iconText}</p>
              <div>
                <h3 className={styles.title}>{reviewer_name}</h3>
                <ul className={styles.rating}>
                  {rating.map((el, idx) => (
                    <li
                      key={`${reviewer_name}-${idx}`}
                      className={clsx(
                        styles.item,
                        reviewer_rating.toFixed() > idx && styles.itemActive
                      )}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={styles.description}>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
};
