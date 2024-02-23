import { apiLogin } from '../../repositories/http-login';
import { DeleteCategoriesUseCase } from '../delete-categories';

export const makeDeleteCategory = () => {
  const deleteCategoriesUseCase = new DeleteCategoriesUseCase(apiLogin);
  return deleteCategoriesUseCase;
};
