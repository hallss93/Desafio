import categoriesService from '~/services/categoriesService';

import { RepositoriesTypes } from './types';

const getCategories = (page: number) => {
  return async (dispatch: any) => {
    dispatch({ type: RepositoriesTypes.CATEGORIES_LOADING, payload: true });
    try {
      const response = await categoriesService.getAllCategories({ page });
      dispatch({
        type: RepositoriesTypes.CATEGORIES,
        payload: response.data,
      });
      dispatch({
        type: RepositoriesTypes.CATEGORIES_PAGINATION,
        payload: response.pagination,
      });
      return response;
    } catch (err: any) {
      dispatch({
        type: RepositoriesTypes.CATEGORIES_ERROR,
        payload: true,
      });
      throw err;
    } finally {
      dispatch({ type: RepositoriesTypes.CATEGORIES_LOADING, payload: false });
    }
  };
};

const deleteCategory = (id: number) => {
  return async (dispatch: any) => {
    dispatch({ type: RepositoriesTypes.CATEGORIES_DELETE_LOADING, payload: true });
    try {
      const response = await categoriesService.deleteCategory(id);
      return response;
    } finally {
      dispatch({ type: RepositoriesTypes.CATEGORIES_DELETE_LOADING, payload: false });
    }
  };
};

export { deleteCategory, getCategories };
