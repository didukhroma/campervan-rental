import { DetailsItem } from '../';
import styles from './Details.module.css';

export const Details = props => {
  const data = Object.keys(props);
  return (
    <ul className={styles.list}>
      {data.map(el => (
        <DetailsItem key={el} name={el} value={props[el]} />
      ))}
    </ul>
  );
};
