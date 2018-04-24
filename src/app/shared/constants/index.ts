const API_ENDPOINT = 'data/';
const FREEGEOIP_URL = 'https://api.ipdata.co/';

const getApiEndpoint = (section: string): string => {
  return `${API_ENDPOINT}${section}.json`;
};

const getFreeGeoIpUrl = (): string => {
  return FREEGEOIP_URL;
};

export {
  getApiEndpoint,
  getFreeGeoIpUrl,
};
