import { apiLogin } from '../../repositories/http-login';
import { GetAllProductsUseCase } from '../get-all-products';

export const makeGetAllProducts = () => {
  const getAllProductsUseCase = new GetAllProductsUseCase(apiLogin);
  return getAllProductsUseCase;
};
