export const prepareSingleData = data => {
  const locationData = data.location.split(', ');
  return {
    ...data,
    location: { country: locationData[0], city: locationData[1] },
  };
};

export const prepareData = data => {
  const result = data.map(el => prepareSingleData(el));

  return result;
};
