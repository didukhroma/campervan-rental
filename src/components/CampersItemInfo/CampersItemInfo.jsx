import clsx from 'clsx';
import { ButtonIcon, Location, Rating } from '..';
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
  width,
  height,
  position,
  infoStyles,
  titleWrapperStyles,
  locationWrapperStyles,
}) => {
  return (
    <div className={clsx(styles.info, infoStyles)}>
      <div className={clsx(styles.titleWrapper, titleWrapperStyles)}>
        <h3 className={styles.title}>{name}</h3>
        {position === 'before' && (
          <p className={styles.price}>&#x20AC;{String(price) + '.00'}</p>
        )}
        <ButtonIcon
          iconId={iconId}
          cbOnClick={handleClick}
          trigger={trigger}
          width={width}
          height={height}
        />
      </div>
      <div className={clsx(styles.locationWrapper, locationWrapperStyles)}>
        <Rating rating={rating} reviews={reviews} />
        <Location city={city} country={country} />
      </div>
      {position === 'after' && (
        <p className={styles.price}>&#x20AC;{String(price) + '.00'}</p>
      )}
    </div>
  );
};
