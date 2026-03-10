import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

instance.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export interface IApiParams {
  url: string;
  pageSize?: number;
  pageNum?: number;
  params?: any;
}

export const apiGet = ({ url, pageSize, pageNum, params }: IApiParams) => {
  return instance.get(`/${url}`, { params: { pageSize, pageNum, ...params } });
};
// fghjkl
