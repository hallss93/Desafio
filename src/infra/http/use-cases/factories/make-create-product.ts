import { apiLogin } from '../../repositories/http-login';
import { CreateProductUseCaser } from '../create-product';

export const makeCreateProduct = () => {
  const createProductUseCase = new CreateProductUseCaser(apiLogin);
  return createProductUseCase;
};
