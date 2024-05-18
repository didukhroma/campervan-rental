import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers } from '../reduxState/operations';
import { selectPage } from '../reduxState/slice';

import { Filters, CampersList, Container } from '../components';

export const Catalog = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  return (
    <Container>
      <h2>Catalog page</h2>
      <Filters />
      <CampersList />
    </Container>
  );
};
