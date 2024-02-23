import { apiLogin } from '../../repositories/http-login';
import { GetProductByIdUseCaser } from '../get-product-by-id';

export const makeGetProductById = () => {
  const getProductByIdUseCase = new GetProductByIdUseCaser(apiLogin);
  return getProductByIdUseCase;
};
