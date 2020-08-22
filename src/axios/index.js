import axios from 'axios';
import config from '../config'

const activeConfig = config[process.env.NODE_ENV];

const axiosInstance = axios.create({
    baseURL: activeConfig.baseURL
});

export default axiosInstance;
