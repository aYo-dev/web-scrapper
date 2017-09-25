import * as core from 'express-serve-static-core';
import * as domainService from '../services/domainService';
import Scraper from '../services/Scraper';

export const postHandler = async (req: core.Request, res: core.Response) => {
  const { url } = req.body.data;

  try {
    const domain = domainService.prepareDomain(url)[1];
    const [ domainConfig ] = await domainService.findByDomain(domain);
    const domainMeta = await domainService.findDomainMetaByGuid(domainConfig.guid);
    const scraper = new Scraper(url, {...domainConfig, md: domainMeta});

    res.json(await scraper.getData());
    return;
  } catch (e) {
    throw e;
  }
};

export default {
  postHandler
};
