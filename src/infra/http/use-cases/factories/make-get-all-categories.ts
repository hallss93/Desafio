import { apiLogin } from '../../repositories/http-login';
import { GetAllCategoriesUseCase } from '../get-all-categories';

export const makeGetAllCategories = () => {
  const getAllCategoriesUseCase = new GetAllCategoriesUseCase(apiLogin);
  return getAllCategoriesUseCase;
};
