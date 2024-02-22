import { AxiosInstance } from 'axios';

import { IGetAllCategories } from '~/domain/use-cases/get-all-categories';

export class GetAllCategoriesUseCaser implements IGetAllCategories {
  constructor(private readonly httpGetClient: AxiosInstance) {}

  async send(params: IGetAllCategories.Params): Promise<any> {
    return await this.httpGetClient.get('category', {
      params: params.query,
    });
  }
}
