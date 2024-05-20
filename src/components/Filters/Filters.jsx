import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { FormCheckbox, Button, LocationInput, FormRadioButton } from '../';
import styles from './Filters.module.css';
import { fetchCampersByFilters } from '../../reduxState/operations';
import { selectPage } from '../../reduxState/slice';
import { useState } from 'react';

const vehicleEquipmentData = ['AC', 'Automatic', 'Kitchen', 'TV', 'Shower'];

export const Filters = () => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  });

  const handleChangeType = type => {
    setType(type);
  };

  const handleChangeLocation = e => {
    setLocation(e.target.value);
  };

  const handleChangeCheckbox = e => {
    const equipmentName = e.target.name.toLowerCase();

    setEquipment(prev => ({ ...prev, [equipmentName]: e.target.checked }));
  };

  const dispatch = useDispatch();

  const page = useSelector(selectPage);

  const handleSubmit = e => {
    e.preventDefault();

    const locationStr =
      location.length === 0 ? '' : `location=${location.toLowerCase()}&`;

    const typeStr = type.length === 0 ? '' : `form=${type}&`;
    const equipmentStr = Object.keys(equipment)
      .filter(el => equipment[el])
      .join('&');

    let searchQuery = locationStr + typeStr + equipmentStr;

    dispatch(fetchCampersByFilters({ page, searchQuery }));
    setType('');
    setLocation('');
    setEquipment([]);
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
