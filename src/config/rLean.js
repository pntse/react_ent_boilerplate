import * as entities from 'lib/entities';

export const rLean = {
  entities,
  api: {
    headers: {
      Authorization: `Bearer token`,
    },
    uri: process.env.REACT_APP_API_URI,
  },
  logToConsole:
    process.env.REACT_APP_ENV === 'local' ||
    process.env.REACT_APP_ENV === 'dev',
};
