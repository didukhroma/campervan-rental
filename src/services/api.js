import axios from 'axios';
//Base setting for axios
const baseURL = 'https://664395786c6a65658707aac7.mockapi.io/campers';

/**
 * Fetch array of campers from DB
 *
 * @async
 * @returns {Promise}
 * @example
 * const fetchCampersByPage = async () => await axios.get().data;
 */

export const fetchCampersByPage = async page => {
  const params = {
    page,
    limit: 4,
  };
  const { data } = await axios.get(baseURL, { params });
  return data;
};
