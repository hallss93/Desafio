import ICategory from '~/models/categoryModel';
import IPagination from '~/models/paginationModel';

export enum RepositoriesTypes {
  CATEGORIES = '@repositories/CATEGORIES',
  CATEGORIES_PAGINATION = '@repositories/CATEGORIES_PAGINATION',
  CATEGORIES_LOADING = '@repositories/CATEGORIES_LOADING',
  CATEGORIES_DELETE_LOADING = '@repositories/CATEGORIES_DELETE_LOADING',
  CATEGORIES_ERROR = '@repositories/CATEGORIES_ERROR',
}

export interface IResponse {
  data: IRepositoriesState;
}

export interface IRepositoriesState {
  readonly categories: ICategory[];
  readonly categoriesLoading: boolean;
  readonly categoriesError: boolean;
  readonly deleteLoading: boolean;
  readonly pagination: IPagination;
}
