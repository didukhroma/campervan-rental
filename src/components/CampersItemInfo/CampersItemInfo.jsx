import { ButtonIcon, Location, Rating } from '../';
import styles from './CampersItemInfo.module.css';

export const CampersItemInfo = ({
  name,
  price,
  iconId,
  handleClick,
  trigger,
  rating,
  reviews,
  city,
  country,
}) => {
  return (
    <div className={styles.info}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>&#x20AC;{price}</p>
        <ButtonIcon iconId={iconId} cbOnClick={handleClick} trigger={trigger} />
      </div>
      <div className={styles.locationWrapper}>
        <Rating rating={rating} reviews={reviews} />
        <Location city={city} country={country} />
      </div>
    </div>
  );
};
