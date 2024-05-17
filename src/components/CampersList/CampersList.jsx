import { useSelector } from 'react-redux';
import { selectCampersList } from '../../reduxState/slice';

import { CampersListItem } from '../';

export const CampersList = () => {
  const campersList = useSelector(selectCampersList);

  return (
    <ul>
      {campersList.map(el => (
        <CampersListItem key={el._id} {...el} />
      ))}
    </ul>
  );
};
