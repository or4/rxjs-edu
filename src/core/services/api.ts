import { create } from 'apisauce';

const host = 'https://api.coinmarketcap.com/v2/ticker';

const api = create({
  baseURL: host,
});

export default api;
