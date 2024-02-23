import { AxiosRequestConfig } from 'axios';

import { GetAllProducts } from '../models/get-all-products';

export interface IGetAllProducts {
  send(params: IGetAllProducts.Params): Promise<any>;
}

export namespace IGetAllProducts {
  export type Params = {
    query?: GetAllProducts;
    config?: AxiosRequestConfig;
  };
}
