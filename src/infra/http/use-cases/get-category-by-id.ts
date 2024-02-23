import { AxiosInstance } from 'axios';

import { IGetCategoryById } from '~/domain/use-cases/get-category-by-id';

export class GetCategoryByIdUseCaser implements IGetCategoryById {
  constructor(private readonly httpClient: AxiosInstance) {}

  async send(params: IGetCategoryById.Params): Promise<any> {
    const { query, config } = params;

    const response = await this.httpClient.get(`category/${query.id}`, config);

    return response.data;
  }
}
