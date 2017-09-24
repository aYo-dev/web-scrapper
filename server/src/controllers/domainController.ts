import * as core from 'express-serve-static-core';
import * as domainService from '../services/domainService';

export const create = async (req: core.Request, res: core.Response) => {
  const data = req.body.data;

  try {
    res.json(await domainService.create(data));
    return;
  } catch (e) {
    throw e;
  }
};

export const get = async (req: core.Request, res: core.Response) => {
  const guid = req.params.guid;

  try {
    res.json(await domainService.findByGuid(guid));
    return;
  } catch (e) {
    throw e;
  }
};

export default {
  create,
  get
};
