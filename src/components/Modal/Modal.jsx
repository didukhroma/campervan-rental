import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  closeModal,
  selectIsModalOpen,
  selectModalId,
  setError,
  startLoader,
  stopLoader,
} from '../../reduxState/slice';

import { fetchCamperInfoById } from '../../services/api';

import { prepareSingleData } from '../../helpers/prepareData';

import styles from './Modal.module.css';
import { CampersItemInfo } from '../CampersItemInfo/CampersItemInfo';
import { Gallery } from '../Gallery/Gallery';
import { Description } from '../Description/Description';
import { BookingForm } from '../BookingForm/BookingForm';

export const Modal = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  const overlayRef = useRef();

  const [data, setData] = useState(null);

  const camperId = useSelector(selectModalId);

  const handleClick = e => {
    if (e.target !== overlayRef.current) return;
    dispatch(closeModal());
  };

  const handleClickClose = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    const handlePressEscape = ({ key }) => {
      key === 'Escape' && dispatch(closeModal());
    };

    const fetchDataById = async id => {
      try {
        dispatch(startLoader());
        const data = await fetchCamperInfoById(id);
        const preparedData = prepareSingleData(data);
        setData(preparedData);
      } catch (error) {
        dispatch(setError(error.message));
        dispatch(stopLoader());
      } finally {
        dispatch(stopLoader());
      }
    };

    if (!camperId) return;

    fetchDataById(camperId);

    window.addEventListener('keydown', handlePressEscape);

    return () => {
      window.removeEventListener('keydown', handlePressEscape);
    };
  }, [dispatch, camperId]);

  return (
    <>
      {isModalOpen && data && (
        <div className={styles.overlay} onClick={handleClick} ref={overlayRef}>
          <div className={styles.wrapper}>
            <CampersItemInfo
              name={data.name}
              price={data.price}
              iconId="icon-close"
              width="32"
              height="32"
              rating={data.rating}
              reviews={data.reviews.length}
              city={data.location.city}
              country={data.location.country}
              handleClick={handleClickClose}
            />
            <Gallery name={data.name} data={data.gallery} />
            <Description text={data.description} />
            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
};
