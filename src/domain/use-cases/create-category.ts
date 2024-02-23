import { AxiosRequestConfig } from 'axios';

import { CreateCategory } from '../models/create-category';

export interface ICreateCategory {
  send: (params: ICreateCategory.Params) => Promise<any>;
}

export namespace ICreateCategory {
  export type Params = {
    body: CreateCategory;
    config?: AxiosRequestConfig;
  };
}
