import { apiLogin } from '../../repositories/http-login';
import { GetAllCategoriesUseCaser } from '../get-all-categories';

export const makeGetAllCategories = () => {
  const getAllCategoriesUseCase = new GetAllCategoriesUseCaser(apiLogin);
  return getAllCategoriesUseCase;
};
