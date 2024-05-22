import { useCallback, useEffect, useRef, useState } from 'react';
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

import {
  CampersItemInfo,
  Gallery,
  Description,
  BookingForm,
  ModalTabs,
  Features,
  Reviews,
} from '..';

import styles from './Modal.module.css';

export const Modal = () => {
  const dispatch = useDispatch();
  const overlayRef = useRef();

  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(false);

  const isModalOpen = useSelector(selectIsModalOpen);
  const camperId = useSelector(selectModalId);

  const closeModalAndClearState = useCallback(() => {
    dispatch(closeModal());
    setData(null);
  }, [dispatch]);

  const handlePressEscape = useCallback(
    ({ key }) => {
      if (key !== 'Escape') return;
      closeModalAndClearState();
    },
    [closeModalAndClearState]
  );

  const handleClick = e => {
    if (e.target !== overlayRef.current) return;
    closeModalAndClearState();
  };

  const handleClickClose = () => {
    closeModalAndClearState();
  };

  const toggleActiveTab = e => {
    if (e.target.textContent.includes('Feature') && !activeTab) return;
    if (e.target.textContent.includes('Reviews') && activeTab) return;
    setActiveTab(!activeTab);
  };

  const fetchDataById = useCallback(
    async id => {
      try {
        dispatch(startLoader());
        dispatch(setError(null));
        const data = await fetchCamperInfoById(id);
        const preparedData = prepareSingleData(data);
        setData(preparedData);
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        setTimeout(() => {
          dispatch(stopLoader());
        }, 500);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (!camperId) return;

    fetchDataById(camperId);

    window.addEventListener('keydown', handlePressEscape);

    return () => {
      window.removeEventListener('keydown', handlePressEscape);
      setActiveTab(false);
    };
  }, [
    dispatch,
    camperId,
    closeModalAndClearState,
    handlePressEscape,
    fetchDataById,
  ]);

  return (
    <>
      {isModalOpen && data && (
        <div className={styles.overlay} onClick={handleClick} ref={overlayRef}>
          <div className={styles.wrapper}>
            <div className={styles.thumb}>
              <CampersItemInfo
                name={data.name}
                price={data.price}
                iconId="close"
                width="32"
                height="32"
                rating={data.rating}
                reviews={data.reviews.length}
                city={data.location.city}
                country={data.location.country}
                handleClick={handleClickClose}
                position="after"
                infoStyles={styles.modalInfo}
                titleWrapperStyles={styles.modalInfoTitleWrapper}
                locationWrapperStyles={styles.modalInfoLocationWrapper}
              />
              <Gallery name={data.name} data={data.gallery} />
              <Description text={data.description} />
            </div>
            <ModalTabs handleClick={toggleActiveTab} activeTab={activeTab} />
            <div className={styles.info}>
              {!activeTab && <Features data={data} />}
              {activeTab && <Reviews data={data.reviews} />}
              <BookingForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
