import { DetailsItem } from '../DetailsItem/DetailsItem';

export const Details = details => {
  console.log(Object.keys(details));
  console.log(details);
  return (
    <ul>
      {details.map(el => (
        <DetailsItem key={el} />
      ))}
    </ul>
  );
};
