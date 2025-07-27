import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '15a8965e387245b8ae875a714df900e7',
  },
});
