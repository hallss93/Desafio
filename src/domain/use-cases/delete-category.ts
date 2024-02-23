import { AxiosRequestConfig } from 'axios';

import { DeleteCategory } from '../models/delete-category';

export interface IDeleteCategory {
  send(params: IDeleteCategory.Params): Promise<any>;
}

export namespace IDeleteCategory {
  export type Params = {
    params?: DeleteCategory;
    config?: AxiosRequestConfig;
  };
}
