import { Icon } from '..';
import styles from './CategoriesItem.module.css';

export const CategoriesItem = ({ name, value }) => {
  const upperCaseWords = ['adults', 'beds', 'hob'];

  const text =
    name.length === 2
      ? `${name.toUpperCase()}`
      : upperCaseWords.includes(name)
      ? `${value} ${name}`
      : `${name[0].toUpperCase() + name.slice(1)}`;

  return (
    <>
      {!!value && (
        <li className={styles.item}>
          <Icon id={name} />
          <p>{text === 'Air-conditioner' ? 'Air conditioner' : text} </p>
        </li>
      )}
    </>
  );
};
