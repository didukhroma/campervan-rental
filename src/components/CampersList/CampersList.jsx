import { useSelector } from 'react-redux';
import { selectCampersList } from '../../reduxState/slice';

import { CampersListItem } from '../CampersListItem/CampersListItem';

export const CampersList = () => {
  const campersList = useSelector(selectCampersList);
  console.log(campersList);

  return (
    <ul>
      {campersList.map(({ _id, name, price, rating }) => (
        <CampersListItem
          key={_id}
          id={_id}
          name={name}
          price={price}
          rating={rating}
        />
      ))}
    </ul>
  );
};
