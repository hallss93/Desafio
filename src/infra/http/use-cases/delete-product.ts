import { AxiosInstance } from 'axios';

import { IDeleteProduct } from '~/domain/use-cases/delete-product';
import { IGetAllProducts } from '~/domain/use-cases/get-all-products';

export class DeleteProductUseCase implements IGetAllProducts {
  constructor(private readonly httpGetClient: AxiosInstance) {}

  async send(params: IDeleteProduct.Params): Promise<any> {
    return await this.httpGetClient.delete(`product/${params.params?.id}`);
  }
}
