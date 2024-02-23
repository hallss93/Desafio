import { AxiosInstance } from 'axios';

import { IEditCategory } from '~/domain/use-cases/edit-category';

export class EditCategoryUseCaser implements IEditCategory {
  constructor(private readonly httpPutClient: AxiosInstance) {}

  async send(params: IEditCategory.Params): Promise<any> {
    return await this.httpPutClient.put(`category/${params.body.id}`, params.body);
  }
}
