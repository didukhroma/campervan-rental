import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { FormCheckbox, Button, LocationInput, FormRadioButton } from '../';
import styles from './Filters.module.css';

import { setFilter as setNewFilter } from '../../reduxState/slice';
import { useState } from 'react';

const vehicleEquipmentData = ['AC', 'Automatic', 'Kitchen', 'TV', 'Shower'];

export const Filters = () => {
  const [filter, setFilter] = useState({
    location: '',
    details: {
      automatic: false,
      kitchen: false,
      tv: false,
      shower: false,
      ac: false,
    },
    type: '',
  });

  const handleChangeType = type => {
    setFilter(prev => ({ ...prev, type }));
  };

  const handleChangeLocation = e => {
    setFilter(prev => ({ ...prev, location: e.target.value.trim() }));
  };

  const handleChangeCheckbox = e => {
    const equipmentName = e.target.name.toLowerCase();
    setFilter(prev => ({
      ...prev,
      details: { ...prev.details, [equipmentName]: e.target.checked },
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setNewFilter(filter));
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.locationWrapper}>
        <h3 className={clsx(styles.title, styles.location)}>Location</h3>
        <LocationInput handleChange={handleChangeLocation} />
      </div>

      <h3 className={styles.title}>Filters</h3>
      <div className={styles.subTitleWrapper}>
        <h4 className={styles.subtitle}>Vehicle equipment</h4>
      </div>
      <FormCheckbox
        options={vehicleEquipmentData}
        width="32"
        height="32"
        handleClick={handleChangeCheckbox}
      />
      <div className={styles.subTitleWrapper}>
        <h4 className={styles.subtitle}>Vehicle type</h4>
      </div>

      <FormRadioButton handleChangeType={handleChangeType} />
      <Button text="Search" bgColor="red" type="submit" />
    </form>
  );
};
