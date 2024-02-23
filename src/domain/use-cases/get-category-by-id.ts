import { AxiosRequestConfig } from 'axios';

import { GetCategoryById } from '../models/get-category-by-id';

export interface IGetCategoryById {
  send(params: IGetCategoryById.Params): Promise<any>;
}

export namespace IGetCategoryById {
  export type Params = {
    query: GetCategoryById;
    config?: AxiosRequestConfig;
  };
}
