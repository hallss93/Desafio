import { AxiosRequestConfig } from 'axios';

import { DeleteProduct } from '../models/delete-product';

export interface IDeleteProduct {
  send(params: IDeleteProduct.Params): Promise<any>;
}

export namespace IDeleteProduct {
  export type Params = {
    params?: DeleteProduct;
    config?: AxiosRequestConfig;
  };
}
