import ICategory from './categoryModel';

export default interface IProduct {
  id: number;
  name: string;
  description: string;
  category?: ICategory;
  deletedAt: string;
  created: string;
  updated: string;
}
