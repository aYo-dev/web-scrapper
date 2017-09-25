export interface IModel {
  save(): Promise<any>;
};

export interface IRule {
  name: string;
  template?: string;
}

export interface IDomainMetadata {
  rule: IRule;
  selector: string;
  domainGuid: string;
  ts?: string;
  guid?: string;
};

export interface IDomain {
  domain: string;
  method: string;
  ts?: string;
  guid?: string;
};

export interface IDomainConfig extends IDomain {
  md: Array<IDomainMetadata>;
};
