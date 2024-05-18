import { CategoriesItem } from '..';
import styles from './Categories.module.css';

export const Categories = props => {
  const data = Object.keys(props);
  return (
    <ul className={styles.list}>
      {data.map(el => (
        <CategoriesItem key={el} name={el} value={props[el]} />
      ))}
    </ul>
  );
};
