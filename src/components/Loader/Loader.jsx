import { InfinitySpin } from 'react-loader-spinner';
import styles from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={styles.overlay}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#e44848"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
