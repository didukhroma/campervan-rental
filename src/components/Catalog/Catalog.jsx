import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers } from '../../reduxState/operations';
import {
  clearError,
  nextPage,
  selectCampersList,
  selectError,
  selectFilter,
  selectIsLoading,
  selectPage,
} from '../../reduxState/slice';

import { Filters, CampersList, Loader, Error } from '..';

import styles from './Catalog.module.css';
import { filteredCampers } from '../../helpers/filteredCampers';

export const Catalog = () => {
  const dispatch = useDispatch();

  const campersList = useSelector(selectCampersList);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const filteredCampersList = filteredCampers(campersList, filter);

  const handleClickLoadMore = () => dispatch(nextPage());

  useEffect(() => {
    dispatch(clearError());

    dispatch(fetchCampers(page));
  }, [dispatch, page, filter]);

  return (
    <>
      {!errorMessage && (
        <div className={styles.wrapper}>
          <Filters />
          {filteredCampersList.length !== 0 ? (
            <CampersList
              data={filteredCampersList}
              cbOnClick={handleClickLoadMore}
              page={page}
            />
          ) : (
            <div className={styles.textWrapper}>
              <p className={styles.text}>Please change search parameters</p>
            </div>
          )}
        </div>
      )}
      {isLoading && <Loader />}
      {errorMessage && <Error message={errorMessage} />}
    </>
  );
};
