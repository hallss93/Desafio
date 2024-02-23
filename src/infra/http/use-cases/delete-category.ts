import { AxiosInstance } from 'axios';

import { IDeleteCategory } from '~/domain/use-cases/delete-category';
import { IGetAllCategories } from '~/domain/use-cases/get-all-categories';

export class DeleteCategoryUseCase implements IGetAllCategories {
  constructor(private readonly httpGetClient: AxiosInstance) {}

  async send(params: IDeleteCategory.Params): Promise<any> {
    return await this.httpGetClient.delete(`category/${params.params?.id}`);
  }
}
