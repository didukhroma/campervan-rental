import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers } from '../reduxState/operations';
import { nextPage, selectPage } from '../reduxState/slice';

import { Button, CampersList, Container } from '../components';
import { Filters } from '../components/Filters/Filters';

export const Catalog = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);

  const handleClickLoadMore = () => dispatch(nextPage());

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  return (
    <Container>
      <h2>Catalog page</h2>
      <Filters />
      <CampersList />
      <Button text="Load more" cbOnClick={handleClickLoadMore} />
    </Container>
  );
};
