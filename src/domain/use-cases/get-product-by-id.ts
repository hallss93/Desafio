import { AxiosRequestConfig } from 'axios';

import { GetProductById } from '../models/get-product-by-id';

export interface IGetProductById {
  send(params: IGetProductById.Params): Promise<any>;
}

export namespace IGetProductById {
  export type Params = {
    query: GetProductById;
    config?: AxiosRequestConfig;
  };
}
