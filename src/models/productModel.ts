import ICategory from './categoryModel';

export default interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  category?: ICategory;
  deletedAt: string;
  created: string;
  updated: string;
}
