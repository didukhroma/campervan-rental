import { useState } from 'react';
import iziToast from 'izitoast';
import { Button, FormField } from '..';

import { currentDate } from '../../helpers/currentDate';

import styles from './BookingForm.module.css';
iziToast.settings({
  timeout: 3000,
  class: styles.notification,
});
const INITIAL_STATE = {
  name: '',
  email: '',
  date: currentDate(),
  comment: '',
};

export const BookingForm = () => {
  const [data, setData] = useState(INITIAL_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    iziToast.success({
      title: 'Thank you!',
      message: 'Our team is contact with You soon.',
    });
    setData(INITIAL_STATE);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Book your campervan now</h3>
        <p className={styles.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={styles.thumb}>
        <FormField
          type="text"
          name="name"
          placeholder="Name"
          required={true}
          minLength="2"
          value={data.name}
          cbOnChange={handleChange}
        />
        <FormField
          type="email"
          name="email"
          placeholder="Email"
          required={true}
          minLength="2"
          value={data.email}
          cbOnChange={handleChange}
        />
        <FormField
          type="date"
          name="date"
          required={true}
          minLength="2"
          value={data.date}
          cbOnChange={handleChange}
        />
        <FormField
          type="textarea"
          name="comment"
          placeholder="Comment"
          value={data.comment}
          cbOnChange={handleChange}
          rows="3"
        />
      </div>
      <Button text="Send" bgColor="red" type="submit" />
    </form>
  );
};
