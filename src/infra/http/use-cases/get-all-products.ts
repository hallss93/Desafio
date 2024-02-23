import { AxiosInstance } from 'axios';

import { IGetAllProducts } from '~/domain/use-cases/get-all-products';

export class GetAllProductsUseCase implements IGetAllProducts {
  constructor(private readonly httpGetClient: AxiosInstance) {}

  async send(params: IGetAllProducts.Params): Promise<any> {
    return await this.httpGetClient.get('product', {
      params: params.query,
    });
  }
}
