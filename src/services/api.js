import axios from 'axios';
//Base setting for axios
axios.defaults.baseURL = 'https://664395786c6a65658707aac7.mockapi.io/campers';

/**
 * Fetch array of campers from DB
 *
 * @async
 * @returns {Promise}
 * @example
 * const fetchCampers = async () => await axios.get().data;
 */
export const fetchCampers = async () => await axios.get().data;
