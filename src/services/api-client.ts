import axios from 'axios';

const RAWG_BASE_URL = import.meta.env.VITE_RAWG_BASE_URL;
const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export default axios.create({
  baseURL: RAWG_BASE_URL,
  params: {
    key: RAWG_API_KEY,
  },
});
