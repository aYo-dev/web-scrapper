import db from '../../config/database';
import { DOMAIN_METADATA_TABLE } from '../constants/dbTables';
import { IModel, IDomainMetadata, IRule } from '../interfaces/models';

class DomainMeta implements IModel {
  constructor(data: IDomainMetadata) {
    this.domain_guid = data.domainGuid;
    this.selector = data.selector;
    this.rule = data.rule;
    this.guid = data.guid;
    this.ts = data.ts;
  }

  domain_guid: string;
  selector: string;
  rule: IRule;
  guid: string;
  ts: string;

  static async findByDomainGuid(domainGuid): Promise<IDomainMetadata[]> {
    return await db.table(DOMAIN_METADATA_TABLE).where({domain_guid: domainGuid});
  }

  async save(): Promise<IDomainMetadata[]> {
    return await db.insert(this, '*')
      .into(DOMAIN_METADATA_TABLE);
  }
};

export default DomainMeta;
