import db from '../../config/database';
import { DOMAINS_TABLE } from '../constants/dbTables';
import { IModel, IDomain } from '../interfaces/models';

class Domain implements IModel {
  constructor(domain: IDomain) {
    this.domain = domain.domain;
    this.method = domain.method;
    this.guid = domain.guid;
    this.ts = domain.ts;
  }

  domain: string;
  method: string;
  guid: string;
  ts: string;

  static async findByDomain(domain): Promise<IDomain[]> {
    return await db.table(DOMAINS_TABLE).where({domain});
  }

  async save(): Promise<IDomain[]> {
    return await db.insert(this, '*')
      .into(DOMAINS_TABLE);
  }
};

export default Domain;
