import { useDispatch, useSelector } from 'react-redux';

import { toggleFavorites, selectFavorites } from '../../reduxState/slice';
import { openModal } from '../../reduxState/slice';

import { Button, Categories, Picture, Description, CampersItemInfo } from '..';

import styles from './CampersListItem.module.css';

export const CampersListItem = props => {
  const {
    _id: id,
    name,
    price,
    rating,
    reviews,
    gallery,
    description,
    adults,
    transmission,
    engine,
    details,
    location,
  } = props;

  const dispatch = useDispatch();

  const favoritesList = useSelector(selectFavorites);

  const isPresentInFavorites = favoritesList.find(el => el === id);

  const handleClickShowMore = () => dispatch(openModal(id));

  const handleClickAddToFavorites = () => dispatch(toggleFavorites(id));

  return (
    <li className={styles.item}>
      <Picture name={name} src={gallery[0]} />
      {/* thumb */}
      <div className={styles.thumb}>
        <CampersItemInfo
          name={name}
          price={price}
          iconId="heart"
          handleClick={handleClickAddToFavorites}
          trigger={isPresentInFavorites}
          rating={rating}
          reviews={reviews.length}
          city={location.city}
          country={location.country}
          position="before"
        />
        {/* description */}
        <Description text={description} className={styles.description} />
        {/* categories */}
        <Categories
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
