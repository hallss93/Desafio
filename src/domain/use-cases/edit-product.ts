import { AxiosRequestConfig } from 'axios';

export interface IEditProduct {
  send(params: IEditProduct.Params): Promise<any>;
}

export namespace IEditProduct {
  export type Params = {
    id: number;
    body: FormData;
    config?: AxiosRequestConfig;
  };
}
