import { DOMAIN_METADATA_TABLE } from '../src/constants/dbTables';
import * as Knex from 'knex';

exports.up = (knex: Knex)  => knex.raw(`
  CREATE TABLE ${DOMAIN_METADATA_TABLE} (
      guid uuid DEFAULT uuid_generate_v4() UNIQUE,
      ts TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
      domain_guid uuid NOT NULL REFERENCES domains(guid),
      selector varchar NOT NULL,
      rule varchar
    );

    CREATE INDEX domains_md_guid_idx ON ${DOMAIN_METADATA_TABLE} (guid);
    CREATE INDEX domains_md_domain_idx ON ${DOMAIN_METADATA_TABLE} (domain_guid);
`);

exports.down = (knex: Knex) => knex.raw(`
  DROP TABLE ${DOMAIN_METADATA_TABLE} CASCADE;
`);
