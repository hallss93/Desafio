import { AxiosRequestConfig } from 'axios';

import { EditProduct } from '../models/edit-product';

export interface IEditProduct {
  send(params: IEditProduct.Params): Promise<any>;
}

export namespace IEditProduct {
  export type Params = {
    body: EditProduct;
    config?: AxiosRequestConfig;
  };
}
