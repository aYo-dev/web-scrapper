import db from '../../config/database';
import { DOMAINS_TABLE } from '../constants/dbTables';
import { IModel, IDomain } from '../interfaces/models';

class Domain implements IModel {
  constructor(Domain: IDomain) {
    this.domain = Domain.domain;
    this.selector = Domain.selector;
    this.method = Domain.method;
    this.rules = Domain.rules;
    this.guid = Domain.guid;
    this.ts = Domain.ts;
  }

  domain: string;
  selector: string;
  rules: Array<string>;
  method: string;
  guid: string;
  ts: string;

  static async findByGuid(guid): Promise<IDomain> {
    return await db.table(DOMAINS_TABLE).where({guid});
  }

  async save(): Promise<IDomain> {
    return await db.insert(this, '*')
      .into(DOMAINS_TABLE);
  }
};

export default Domain;
