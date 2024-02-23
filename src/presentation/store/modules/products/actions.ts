import productsService from '~/services/productsService';

import { RepositoriesTypes } from './types';

const getProducts = (page: number, size = 5) => {
  return async (dispatch: any) => {
    dispatch({ type: RepositoriesTypes.PRODUCTS_LOADING, payload: true });
    try {
      const response = await productsService.getAllProducts({ page, size });
      dispatch({
        type: RepositoriesTypes.PRODUCTS,
        payload: response.data,
      });
      dispatch({
        type: RepositoriesTypes.PRODUCTS_PAGINATION,
        payload: response.pagination,
      });
      return response;
    } catch (err: any) {
      dispatch({
        type: RepositoriesTypes.PRODUCTS_ERROR,
        payload: true,
      });
      throw err;
    } finally {
      dispatch({ type: RepositoriesTypes.PRODUCTS_LOADING, payload: false });
    }
  };
};

const deleteProduct = (id: number) => {
  return async (dispatch: any) => {
    dispatch({ type: RepositoriesTypes.PRODUCTS_DELETE_LOADING, payload: true });
    try {
      const response = await productsService.deleteProduct(id);
      return response;
    } finally {
      dispatch({ type: RepositoriesTypes.PRODUCTS_DELETE_LOADING, payload: false });
    }
  };
};

export { deleteProduct, getProducts };
