import { apiLogin } from '../../repositories/http-login';
import { EditProductUseCaser } from '../edit-product';

export const makeEditProduct = () => {
  const editProductUseCase = new EditProductUseCaser(apiLogin);
  return editProductUseCase;
};
