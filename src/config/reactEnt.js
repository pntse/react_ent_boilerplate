import * as models from 'lib/models';
import * as utilities from 'lib/utilities';

export const reactEnt = {
  models: models,
  utilities: utilities,
  api: {
    headers: {
      Authorization: `Bearer token`
    },
    uri: process.env.REACT_APP_API_URI
  },
  logToConsole: true
};
