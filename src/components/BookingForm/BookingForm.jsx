import iziToast from 'izitoast';
import { Button, FormField } from '../';
import styles from './BookingForm.module.css';

iziToast.settings({
  timeout: 3000,
  position: 'topCenter',
});

export const BookingForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    iziToast.success({
      title: 'Thank you!',
      message: 'Our team is contact with You soon.',
    });

    console.dir(e.target);
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
        <FormField type="text" name="name" placeholder="Name" required={true} />
        <FormField
          type="email"
          name="email"
          placeholder="Email"
          required={true}
        />
        <FormField type="date" name="data" required={true} />
        <FormField type="textarea" name="comment" placeholder="Comment" />
      </div>
      <Button text="Send" bgColor="red" type="submit" />
    </form>
  );
};
