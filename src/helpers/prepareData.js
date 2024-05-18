export const prepareData = data => {
  const result = data.map(el => {
    const locationData = el.location.split(', ');
    return {
      ...el,
      location: { country: locationData[0], city: locationData[1] },
    };
  });

  return result;
};
