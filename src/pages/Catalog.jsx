import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCampers } from '../reduxState/operations';
import { CampersList } from '../components/CampersList/CampersList';

const page = 1;

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch]);

  return (
    <>
      <h2>Catalog page</h2>
      <CampersList />
    </>
  );
};
