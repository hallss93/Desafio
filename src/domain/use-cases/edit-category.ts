import { AxiosRequestConfig } from 'axios';

import { EditCategory } from '../models/edit-category';

export interface IEditCategory {
  send(params: IEditCategory.Params): Promise<any>;
}

export namespace IEditCategory {
  export type Params = {
    body: EditCategory;
    config?: AxiosRequestConfig;
  };
}
