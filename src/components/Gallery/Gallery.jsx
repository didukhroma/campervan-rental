import { Picture } from '../';

import styles from './Gallery.module.css';

export const Gallery = ({ name, data }) => {
  return (
    <ul className={styles.list}>
      {data.map((el, idx) => (
        <Picture
          key={`${name}-${idx}`}
          name={`${name} photo ${idx}`}
          src={el}
        />
      ))}
    </ul>
  );
};
