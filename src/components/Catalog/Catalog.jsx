import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers } from '../../reduxState/operations';
import {
  nextPage,
  selectCampersList,
  selectPage,
} from '../../reduxState/slice';

import { Filters, CampersList } from '../';

export const Catalog = () => {
  const dispatch = useDispatch();

  const campersList = useSelector(selectCampersList);
  const page = useSelector(selectPage);

  const handleClickLoadMore = () => dispatch(nextPage());

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  return (
    <>
      <h2>Catalog page</h2>
      <Filters />
      <CampersList
        data={campersList}
        cbOnClick={handleClickLoadMore}
        page={page}
      />
    </>
  );
};
