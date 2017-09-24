import Domain from '../models/Domain';
import { IDomain } from '../interfaces/models';

export const create = async (data): Promise<IDomain> => {
  const domain = new Domain(data);

  return await domain.save();
};

export const findByGuid = async (guid): Promise<IDomain> => {
  return await Domain.findByGuid(guid);
};

export default {
  create,
  findByGuid
};
