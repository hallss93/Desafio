import { Reducer } from 'redux';

import { IRepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: IRepositoriesState = {
  products: [],
  productsLoading: true,
  productsError: false,
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
    case RepositoriesTypes.PRODUCTS_DELETE_LOADING:
      return {
        ...state,
        deleteLoading: action.payload,
      };
    case RepositoriesTypes.PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: action.payload,
      };
    case RepositoriesTypes.PRODUCTS:
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
      };
    case RepositoriesTypes.PRODUCTS_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case RepositoriesTypes.PRODUCTS_ERROR:
      return {
        ...state,
        productsError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
