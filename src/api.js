import axiosBase from 'axios';

const axios = axiosBase.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json'
});

export function crawlingUrls() {
  return axios.get('/urls').then((res) => {
    return res.data.queues;
  });
}
