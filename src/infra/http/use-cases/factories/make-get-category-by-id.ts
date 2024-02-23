import { apiLogin } from '../../repositories/http-login';
import { GetCategoryByIdUseCaser } from '../get-category-by-id';

export const makeGetCategoryById = () => {
  const getCategoryByIdUseCase = new GetCategoryByIdUseCaser(apiLogin);
  return getCategoryByIdUseCase;
};
