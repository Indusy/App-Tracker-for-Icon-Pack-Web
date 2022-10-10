import { BASE_URL } from '@/constants/app-meta';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export { axios };
