import request from './requestService';
import * as cheerio from 'cheerio';
import { IDomainConfig, IDomainMetadata, IRule } from '../interfaces/models';
import * as _ from 'lodash';
import { DIGITS_RGX } from '../constants/regex';

class Scraper {
  constructor(url: string, domainConfig: IDomainConfig) {
    this.url = url;
    this.method = domainConfig.method;
    this.domainMeta = domainConfig.md;
  }

  private readonly url: string;
  private readonly method: string;
  private readonly domainMeta: Array<IDomainMetadata>;

  private async _getFilters() {
    return {
      digit: this.digitsFilter,
      templateString: this.templateStringFilter
    };
  }

  private async _getContent(): Promise<string> {
    return await request(this.url, {
      method: 'GET'
    });
  }

  private async _find() {
    const content = await this._getContent();
    const xmlMode = this.method === 'xml';
    const $ = cheerio.load(content, {xmlMode});

    const data = _.map(this.domainMeta, el => this._filterData(el, $));

    return { data };
  }

  private _filterData(field: IDomainMetadata, $: CheerioStatic) {
    const { selector, rule } = field;
    const value = _.map($(selector), (el) => $(el).text().trim());

    if (_.isEmpty(rule)) return { selector,  value };

    const filters = this._getFilters();

    return filters[rule.name](value, rule.template);
  }

  private digitsFilter(value: string) {
    return value.replace(DIGITS_RGX, '');
  }

  private templateStringFilter(value: string, template: string) {
    const censuredWords = template.split(',');
    const re = new RegExp('\\b(' + censuredWords.join('|') + ')\\b', 'g');

    return (value || '').replace(re, '').replace(/[ ]{2,}/, ' ');
  }

  async getData() {
    return await this._find();
  }
};

export default Scraper;
