import { Button, FormField } from '../';
import styles from './BookingForm.module.css';

export const BookingForm = () => {
  return (
    <form className={styles.form}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <FormField type="text" placeholder="Name" />
      <FormField type="email" placeholder="Email" />
      <FormField type="date" placeholder="Booking date" />
      <FormField type="textarea" placeholder="Comment" />
      <Button text="Send" bgColor="red" type="submit" />
    </form>
  );
};
