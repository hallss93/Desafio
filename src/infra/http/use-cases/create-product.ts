import { AxiosInstance } from 'axios';

import { ICreateProduct } from '~/domain/use-cases/create-product';

export class CreateProductUseCaser implements ICreateProduct {
  constructor(private readonly httpClient: AxiosInstance) {}

  async send(params: ICreateProduct.Params): Promise<any> {
    const { body, config } = params;

    const response = await this.httpClient.post(`category`, body, config);

    return response.data;
  }
}
