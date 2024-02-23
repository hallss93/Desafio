import { AxiosRequestConfig } from 'axios';

export interface ICreateProduct {
  send: (params: ICreateProduct.Params) => Promise<any>;
}

export namespace ICreateProduct {
  export type Params = {
    body: FormData;
    config?: AxiosRequestConfig;
  };
}
