import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import {
  selectError,
  selectFavorites,
  selectIsLoading,
  setError,
  startLoader,
  stopLoader,
} from '../../reduxState/slice';

import { fetchCamperInfoById } from '../../services/api';

import { prepareSingleData } from '../../helpers/prepareData';

import { CampersList, Error, Loader } from '../';

import styles from './Favorites.module.css';

export const Favorites = () => {
  const [campers, setCampers] = useState([]);
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  const fetchCampersByIds = useCallback(async () => {
    if (!favorites.length) return;

    try {
      dispatch(startLoader());
      dispatch(setError(null));
      const data = await Promise.all(
        favorites.map(async el => {
          const data = await fetchCamperInfoById(el);
          return prepareSingleData(data);
        })
      );
      setCampers(data);
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      setTimeout(() => {
        dispatch(stopLoader());
      }, 500);
    }

    return () => {
      setCampers([]);
    };
  }, [dispatch, favorites]);

  useEffect(() => {
    dispatch(setError(null));
    fetchCampersByIds();
  }, [fetchCampersByIds, dispatch]);

  return (
    <>
      {!favorites.length && (
        <p className={styles.text}>
          No campers here. Please add some campers to favorites.
        </p>
      )}

      {!errorMessage && !!favorites.length && <CampersList data={campers} />}

      {isLoading && <Loader />}
      {errorMessage && <Error message={errorMessage} />}
    </>
  );
};
