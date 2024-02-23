import { apiLogin } from '../../repositories/http-login';
import { CreateCategoryUseCaser } from '../create-category';

export const makeCreateCategory = () => {
  const createCategoryUseCase = new CreateCategoryUseCaser(apiLogin);
  return createCategoryUseCase;
};
