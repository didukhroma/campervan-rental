import { Button, CampersListItem } from '..';
import styles from './CampersList.module.css';

export const CampersList = ({ data, page, cbOnClick }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {data.map(el => (
          <CampersListItem key={`${el._id}-${Date.now()}`} {...el} />
        ))}
      </ul>
      {page && page * 4 === data.length && (
        <Button text="Load more" cbOnClick={cbOnClick} />
      )}
    </div>
  );
};
