import axios from 'axios';


const KEY = '29822317-9536f778ac0e6fb075a845c56';
const perPage = 12;
const baseURL = `https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}&q=`;

export const fetchImagesByName = async ({ query = '', page = 1 }) => {
  const url = `${baseURL}${query}&page=${page}`;
  return await axios.get(url).then(({ data }) => data.hits);
};



