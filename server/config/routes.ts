import * as core from 'express-serve-static-core';
import domainController from '../src/controllers/domainController';

export const getRoutes = (app: core.Express) => {
  app.get('/',  (req, res): core.Response => {
    return res.send('<p>Hello World!</p>');
  });

  app.post('/domain/', domainController.create);
};
