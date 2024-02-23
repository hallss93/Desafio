import { apiLogin } from '../../repositories/http-login';
import { DeleteProductUseCase } from '../delete-product';

export const makeDeleteProduct = () => {
  const deleteProductUseCase = new DeleteProductUseCase(apiLogin);
  return deleteProductUseCase;
};
