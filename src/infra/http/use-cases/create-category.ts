import { AxiosInstance } from 'axios';

import { ICreateCategory } from '~/domain/use-cases/create-category';

export class CreateCategoryUseCaser implements ICreateCategory {
  constructor(private readonly httpClient: AxiosInstance) {}

  async send(params: ICreateCategory.Params): Promise<any> {
    const { body, config } = params;

    const response = await this.httpClient.post(`category`, body, config);

    return response.data;
  }
}
