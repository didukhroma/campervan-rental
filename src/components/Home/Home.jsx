import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <h2 className={styles.title}>
        Campervan and Motorhome Rental in Ukraine
      </h2>
      <p className={styles.text}>
        Buying a camper is an important decision. Among the many options, it is
        easy to get confused when choosing the perfect house on wheels.
      </p>
      <p className={styles.text}>
        If you choose a house on wheels and look at different trailers, you can
        arrange a test drive by renting a camper. This is an ideal option in the
        conditions of such a variety of campers on the market. We offer the
        option of short-term rentals (from 2 days to several weeks) and are
        ready to offer long-term rentals from several weeks.
      </p>
      <h3 className={styles.subTitle}>About Camper rental</h3>
      <p className={styles.text}>
        We provide top-quality RVs, campervans and motorhomes for rent or sale
        in several locations across North America, Oceania and Europe through a
        seamless and personalized online experience.
      </p>
      <h3 className={styles.title}>Enjoy your travels with our campers!!!</h3>
    </>
  );
};
