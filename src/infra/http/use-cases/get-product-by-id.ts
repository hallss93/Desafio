import { AxiosInstance } from 'axios';

import { IGetProductById } from '~/domain/use-cases/get-product-by-id';

export class GetProductByIdUseCaser implements IGetProductById {
  constructor(private readonly httpClient: AxiosInstance) {}

  async send(params: IGetProductById.Params): Promise<any> {
    const { query, config } = params;

    const response = await this.httpClient.get(`product/${query.id}`, config);

    return response.data;
  }
}
