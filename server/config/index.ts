import * as path from 'path';

const DB_NAME = process.env['DB_NAME'] || 'postgres';

export const getRootPath = (rootPath) => {
  return path.normalize(__dirname + rootPath);
};

interface IEnvironmentConfig {
  rootPath: string;
  PG_SEARCH_PATH: string;
  PG_URI: string;
  PG_POOL_MIN: number;
  PG_POOL_MAX: number;
  host: string;
  port: string | number;
}

interface IConfig {
  production: IEnvironmentConfig;
  staging: IEnvironmentConfig;
  development: IEnvironmentConfig;
  test: IEnvironmentConfig;
}

const production: IEnvironmentConfig = {
  rootPath: getRootPath('/../'),
  PG_SEARCH_PATH: 'knex,public',
  PG_URI: '',
  PG_POOL_MIN: 0,
  PG_POOL_MAX: 10,
  host: '',
  port: process.env['PORT'] || 3030,
};

const staging: IEnvironmentConfig = {
  rootPath: getRootPath('/../'),
  PG_SEARCH_PATH: 'knex,public',
  PG_URI: '',
  PG_POOL_MIN: 0,
  PG_POOL_MAX: 2,
  host: '',
  port: process.env['PORT'] || 3030
};

const development: IEnvironmentConfig = {
  rootPath: getRootPath('/../'),
  PG_SEARCH_PATH: 'knex,public',
  PG_URI: `postgres://postgres:@127.0.0.1:5432/${DB_NAME}`,
  PG_POOL_MIN: 0,
  PG_POOL_MAX: 2,
  host: '127.0.0.1',
  port: process.env['PORT'] || 3030
};

export default {
  production,
  staging,
  development
} as IConfig;
