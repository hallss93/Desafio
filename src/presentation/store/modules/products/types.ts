import IPagination from '~/models/paginationModel';
import IProduct from '~/models/productModel';

export enum RepositoriesTypes {
  PRODUCTS = '@repositories/PRODUCTS',
  PRODUCTS_PAGINATION = '@repositories/PRODUCTS_PAGINATION',
  PRODUCTS_LOADING = '@repositories/PRODUCTS_LOADING',
  PRODUCTS_DELETE_LOADING = '@repositories/PRODUCTS_DELETE_LOADING',
  PRODUCTS_ERROR = '@repositories/PRODUCTS_ERROR',
}

export interface IResponse {
  data: IRepositoriesState;
}

export interface IRepositoriesState {
  readonly products: IProduct[];
  readonly productsLoading: boolean;
  readonly productsError: boolean;
  readonly deleteLoading: boolean;
  readonly pagination: IPagination;
}
