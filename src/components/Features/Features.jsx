import { Categories } from '../Categories/Categories';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';
import styles from './Features.module.css';

export const Features = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <Categories
        adults={data.adults}
        automatic={data.transmission}
        ac={data.details.airConditioner}
        petrol={data.engine}
        kitchen={data.details.kitchen}
        beds={data.details.beds}
        air-conditioner={data.details.airConditioner}
        cd={data.details.CD}
        tv={data.details.TV}
        radio={data.details.radio}
        hob={data.details.hob}
        toilet={data.details.toilet}
        shower={data.details.shower}
        freezer={data.details.freezer}
        gas={data.details.gas}
        water={data.details.water}
        microwave={data.details.microwave}
      />
      <VehicleDetails
        form={data.form}
        length={data.length}
        width={data.width}
        height={data.height}
        tank={data.tank}
        consumption={data.consumption}
      />
    </div>
  );
};
