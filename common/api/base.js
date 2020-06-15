import axios from 'axios';

export const loadAPI = (url, data) => axios(url, data);
