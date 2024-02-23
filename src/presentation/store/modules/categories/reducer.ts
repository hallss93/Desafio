import { Reducer } from 'redux';

import { IRepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: IRepositoriesState = {
  categories: [],
  categoriesLoading: true,
  categoriesError: false,
  deleteLoading: false,
  pagination: {
    nextPage: null,
    page: 0,
    previousPage: null,
    size: 10,
    totalItems: 0,
    totalPages: 1,
  },
};

const reducer: Reducer<IRepositoriesState, any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.CATEGORIES_DELETE_LOADING:
      return {
        ...state,
        deleteLoading: action.payload,
      };
    case RepositoriesTypes.CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: action.payload,
      };
    case RepositoriesTypes.CATEGORIES:
      return {
        ...state,
        categoriesLoading: false,
        categories: action.payload,
      };
    case RepositoriesTypes.CATEGORIES_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case RepositoriesTypes.CATEGORIES_ERROR:
      return {
        ...state,
        categoriesError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
