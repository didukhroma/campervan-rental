export const currentDate = () => {
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10
      ? String(date.getMonth() + 1).padStart(2, '0')
      : date.getMonth() + 1;
  const day =
    date.getDate() < 10
      ? String(date.getDate()).padStart(2, '0')
      : date.getDate();
  return `${year}-${month}-${day}`;
};
