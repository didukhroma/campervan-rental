export const filteredCampers = (data, filter) => {
  if (!filter) return data;

  let newData = [...data];

  if (filter.location) {
    newData = newData.filter(({ location: { city } }) =>
      city.toLowerCase().includes(filter.location.toLowerCase())
    );
  }

  if (filter.type) {
    newData = newData.filter(
      ({ form }) => form.toLowerCase() === filter.type.toLowerCase()
    );
  }

  const filteredKeys = Object.keys(filter.details).filter(
    el => filter.details[el]
  );

  if (filteredKeys.length === 0) return newData;

  newData = newData.filter(({ details }) => {
    return filteredKeys.filter(el => details[el]).length > 0;
  });

  return newData;
};
