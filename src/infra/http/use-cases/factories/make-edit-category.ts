import { apiLogin } from '../../repositories/http-login';
import { EditCategoryUseCaser } from '../edit-category';

export const makeEditCategory = () => {
  const editCategoryUseCase = new EditCategoryUseCaser(apiLogin);
  return editCategoryUseCase;
};
