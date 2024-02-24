import { AxiosInstance } from 'axios';

import { IEditProduct } from '~/domain/use-cases/edit-product';

export class EditProductUseCaser implements IEditProduct {
  constructor(private readonly httpPutClient: AxiosInstance) {}

  async send(params: IEditProduct.Params): Promise<any> {
    return await this.httpPutClient.put(`product/${params.id}`, params.body, params.config);
  }
}
