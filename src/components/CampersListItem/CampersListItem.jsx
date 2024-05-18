import { Button, Details, Icon } from '../';
import styles from './CampersListItem.module.css';

export const CampersListItem = props => {
  console.log(props);
  const {
    _id: id,
    name,
    price,
    rating,
    gallery,
    description,
    adults,
    transmission,
    engine,
    details,
    beds,
  } = props;

  const handleClickShowMore = () => console.log(id);

  const handleClickAddToFavorites = () => console.log('add to favorites');

  return (
    <li className={styles.item}>
      {/* wrapper image */}
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={gallery[0]}
          alt={name}
          loading="lazy"
        />
      </div>
      {/* thumb */}
      <div className={styles.thumb}>
        {/* title */}
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>&#x20AC;{price}</p>

          <button
            className={styles.favorites}
            type="button"
            onClick={handleClickAddToFavorites}
          >
            <Icon className={styles.icon} id="icon-heart" />
          </button>
        </div>
        {/* location */}
        <div className={styles.locationWrapper}>
          <p>{rating}</p>
          <p>Location</p>
        </div>
        {/* description */}
        <p className={styles.description}>{description}</p>

        <Details
          adults={adults}
          automatic={transmission}
          petrol={engine}
          kitchen={details.kitchen}
          beds={details.beds}
          ac={details.ac}
        />
        <Button
          text="Show more"
          cbOnClick={handleClickShowMore}
          bgColor="red"
        />
      </div>
    </li>
  );
};
