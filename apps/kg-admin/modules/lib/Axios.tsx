import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: 'http://35.213.168.113/lms/api/v2/',
});

export default AxiosInstance;
