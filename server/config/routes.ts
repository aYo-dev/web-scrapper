import * as core from 'express-serve-static-core';
import domainController from '../src/controllers/domainController';
import scrapController from '../src/controllers/scrapController';

export const getRoutes = (app: core.Express) => {
  app.get('/',  (req, res): core.Response => {
    return res.send('<p>Hello World!</p>');
  });

  app.post('/domain/', domainController.create);
  app.post('/scrap/', scrapController.postHandler);
};
