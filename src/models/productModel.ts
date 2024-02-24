import ICategory from './categoryModel';

export default interface IProduct {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  brand: string;
  description: string;
  image: string;
  category?: ICategory;
  deletedAt: string;
  created: string;
  updated: string;
}
