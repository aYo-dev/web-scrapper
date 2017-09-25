import * as _ from 'lodash';
import Domain from '../models/Domain';
import DomainMeta from '../models/DomainMeta';
import { IDomain, IDomainMetadata } from '../interfaces/models';
import { DOMAIN_RGX } from '../constants/regex';

export const create = async (data): Promise<IDomain[]> => {
  const domain = new Domain(data);

  return await domain.save();
};

export const createDomainMetadata = async (domainGuid: string, domainMd: Array<IDomainMetadata>): Promise<any> =>  {
  const domainMetaPromises = _.map(domainMd, (el: IDomainMetadata) => {
    const domainMeta = new DomainMeta({ ...el, domainGuid });

    return domainMeta.save();
  });

  return Promise.all(domainMetaPromises);
};

export const findByDomain = async (domain: string): Promise<IDomain[]> => {
  return await Domain.findByDomain(domain);
};

export const findDomainMetaByGuid = async (domainGuid: string): Promise<IDomainMetadata[]> => {
  return await DomainMeta.findByDomainGuid(domainGuid);
};

export const prepareDomain = (url: string): Array<string> => url.match(DOMAIN_RGX);

export default {
  create,
  findByDomain,
  prepareDomain
};
