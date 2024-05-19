import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers } from '../../reduxState/operations';
import {
  nextPage,
  selectCampersList,
  selectError,
  selectIsLoading,
  selectPage,
} from '../../reduxState/slice';

import { Filters, CampersList, Section, Loader, Error } from '../';

export const Catalog = () => {
  const dispatch = useDispatch();

  const campersList = useSelector(selectCampersList);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  const handleClickLoadMore = () => dispatch(nextPage());

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  return (
    <Section>
      {!errorMessage && (
        <>
          <h2>Catalog page</h2>
          <Filters />
          <CampersList
            data={campersList}
            cbOnClick={handleClickLoadMore}
            page={page}
          />
        </>
      )}
      {isLoading && <Loader />}
      {errorMessage && <Error message={errorMessage} />}
    </Section>
  );
};
