import { API_URL } from '@/constants/app-meta';
import axios from 'axios';

axios.defaults.baseURL = API_URL;

export { axios };
