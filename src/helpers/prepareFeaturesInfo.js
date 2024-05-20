export const prepareInfo = (data, letter) => data.replace(letter, ` ${letter}`);

export const prepareInfoForm = data => {
  if (data === 'alcove') return data[0].toUpperCase() + data.slice(1);
  return data[0].toUpperCase() + data.slice(1, 5) + ' ' + data.slice(5);
};
