const API_ENDPOINT = 'data/';
const IPDATA_URL = 'https://api.ipdata.co/';

const getApiEndpoint = (section: string): string => {
  return `${API_ENDPOINT}${section}.json`;
};

const getFreeGeoIpUrl = (): string => {
  return IPDATA_URL;
};

export {
  getApiEndpoint,
  getFreeGeoIpUrl,
};
