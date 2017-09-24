import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as core from 'express-serve-static-core';

import * as routesConfig from './routes';

export const init = (app: core.Express): core.Express => {
  app.use(bodyParser.json());
  app.use(cors({credentials: true, origin: true}));

  return app;
};
