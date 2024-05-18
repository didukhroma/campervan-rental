import { Icon } from '../';
import styles from './DetailsItem.module.css';

export const DetailsItem = ({ name, value }) => {
  const upperCaseWords = ['automatic', 'petrol', 'kitchen'];

  const text =
    name === 'ac'
      ? `${name.toUpperCase()}`
      : upperCaseWords.includes(name)
      ? `${name[0].toUpperCase() + name.slice(1)}`
      : `${value} ${name}`;

  return (
    <li className={styles.item}>
      <Icon id={`icon-${name}`} />
      <p>{text} </p>
    </li>
  );
};
