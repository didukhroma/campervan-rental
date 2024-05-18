import { useDispatch, useSelector } from 'react-redux';
import {
  nextPage,
  selectCampersList,
  selectPage,
  selectCampersListLength,
} from '../../reduxState/slice';

import { Button, CampersListItem } from '../';
import styles from './CampersList.module.css';

export const CampersList = () => {
  const dispatch = useDispatch();
  const campersList = useSelector(selectCampersList);
  const campersListLength = useSelector(selectCampersListLength);
  const page = useSelector(selectPage);

  const handleClickLoadMore = () => dispatch(nextPage());

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {campersList.map(el => (
          <CampersListItem key={el._id} {...el} />
        ))}
      </ul>
      {page * 4 === campersListLength && (
        <Button text="Load more" cbOnClick={handleClickLoadMore} />
      )}
    </div>
  );
};
