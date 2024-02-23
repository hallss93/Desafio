import { AxiosRequestConfig } from 'axios';

import { CreateProduct } from '../models/create-product';

export interface ICreateProduct {
  send: (params: ICreateProduct.Params) => Promise<any>;
}

export namespace ICreateProduct {
  export type Params = {
    body: CreateProduct;
    config?: AxiosRequestConfig;
  };
}
