import { DOMAINS_TABLE } from '../src/constants/dbTables';
import * as Knex from 'knex';

exports.up = (knex: Knex)  => knex.raw(`
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE ${DOMAINS_TABLE} (
      guid uuid DEFAULT uuid_generate_v4() UNIQUE,
      ts TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
      domain varchar NOT NULL UNIQUE,
      selector varchar NOT NULL,
      method varchar NOT NULL,
      rules jsonb
    );

    CREATE INDEX id_idx ON ${DOMAINS_TABLE} (guid);
    CREATE INDEX ts_idx ON ${DOMAINS_TABLE} (ts);
    CREATE INDEX domain_idx ON ${DOMAINS_TABLE} (domain);
`);

exports.down = (knex: Knex) => knex.raw(`
  DROP TABLE ${DOMAINS_TABLE} CASCADE;
`);
