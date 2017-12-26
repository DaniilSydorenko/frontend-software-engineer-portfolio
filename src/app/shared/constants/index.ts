const API_ENDPOINT = 'data/';

const getApiEndpoint = (section: string): string => {
  return `${API_ENDPOINT}${section}.json`;
};

export { getApiEndpoint };
