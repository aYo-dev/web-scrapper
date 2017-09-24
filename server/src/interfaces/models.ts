export interface IModel {
  save(): Promise<any>;
};

export interface IDomain {
  domain: string;
  method: string;
  rules: Array<string>;
  selector: string;
  ts?: string;
  guid?: string;
};
