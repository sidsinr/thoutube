import axios from 'axios';

export const BASE_URL1 = 'https://yt-api.p.rapidapi.com';
export const BASE_URL2 = 'https://youtube-data8.p.rapidapi.com/video/details';

const options1 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
  },
};
const options2 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL1}/${url}`, options1);

  return data;
};

export const fetchVideo = async (url) => {
  const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);

  return data;
}