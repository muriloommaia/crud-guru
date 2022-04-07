import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}/api/users`,
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const request = async (endpoint: string, body: any) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestHeader = async (endpoint: string, body: any, token: string) => {
  const { data } = await api.put(endpoint, body, {
    headers: {
      Authorization: token,
    },
  });
  return data;
};

export default api;
