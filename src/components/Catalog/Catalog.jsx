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

import { Filters, CampersList, Loader, Error } from '../';

import styles from './Catalog.module.css';

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
    <>
      {!errorMessage && (
        <div className={styles.wrapper}>
          <Filters />
          <CampersList
            data={campersList}
            cbOnClick={handleClickLoadMore}
            page={page}
          />
        </div>
      )}
      {isLoading && <Loader />}
      {errorMessage && <Error message={errorMessage} />}
    </>
  );
};
