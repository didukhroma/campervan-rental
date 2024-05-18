import { useSelector } from 'react-redux';
import { selectCampersList } from '../../reduxState/slice';

import { CampersListItem } from '../';
import styles from './CampersList.module.css';

export const CampersList = () => {
  const campersList = useSelector(selectCampersList);

  return (
    <ul className={styles.list}>
      {campersList.map(el => (
        <CampersListItem key={el._id} {...el} />
      ))}
    </ul>
  );
};
