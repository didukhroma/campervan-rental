import axios from 'axios';

const baseURL = 'https://664395786c6a65658707aac7.mockapi.io/campers';

export const fetchCampersByPage = async page => {
  const params = {
    page,
    limit: 4,
  };
  const { data } = await axios.get(baseURL, { params });
  return data;
};

export const fetchCampersByFiltersQuery = async (page, filters) => {
  const URL = `${baseURL}?${filters}&page=${page}&limit=4`;

  const { data } = await axios.get(URL);
  return data;
};

export const fetchCamperInfoById = async id => {
  const { data } = await axios.get(`${baseURL}/${id}`);
  return data;
};
