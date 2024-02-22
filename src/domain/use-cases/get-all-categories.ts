import { AxiosRequestConfig } from 'axios';

import { GetAllCategories } from '../models/get-all-categories';

export interface IGetAllCategories {
  send(params: IGetAllCategories.Params): Promise<any>;
}

export namespace IGetAllCategories {
  export type Params = {
    query?: GetAllCategories;
    config?: AxiosRequestConfig;
  };
}
