import * as rp from 'request-promise-native';

const request =
  async (url, options: rp.RequestPromiseOptions): Promise<any> => await rp(url, options);

export default  request;
