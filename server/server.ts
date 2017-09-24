import * as express from 'express';
import * as expressConfig from './config/express';
import * as routesConfig from './config/routes';
import config from './config';

const env = process.env['NODE_ENV'] || 'development',
  { port, host } = config[env],
  app = express();

routesConfig.getRoutes(expressConfig.init(app));

app.listen(port, host, null, () => {
  // tslint:disable-next-line: no-console
  console.log(`Listening on http://${host}:${port}`);
});
