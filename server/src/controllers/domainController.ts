import * as core from 'express-serve-static-core';
import * as domainService from '../services/domainService';
import { IDomainConfig } from '../interfaces/models';

export const create = async (req: core.Request, res: core.Response) => {
  const data: IDomainConfig = req.body.data;

  try {
    const pureDomain = domainService.prepareDomain(data.domain)[1];
    const [domain] = await domainService.create({...data, domain : pureDomain});
    const [domainMeta] = await domainService.createDomainMetadata(domain.guid, data.md);

    return res.json({...domain, md: domainMeta});
  } catch (e) {
    throw e;
  }
};

export default {
  create
};
