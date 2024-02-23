import { apiLogin } from '../../repositories/http-login';
import { DeleteCategoryUseCase } from '../delete-category';

export const makeDeleteCategory = () => {
  const deleteCategoryUseCase = new DeleteCategoryUseCase(apiLogin);
  return deleteCategoryUseCase;
};
