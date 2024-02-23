import { CreateProduct } from '~/domain/models/create-product';
import { EditProduct } from '~/domain/models/edit-product';
import { GetAllProducts } from '~/domain/models/get-all-products';
import { GetProductById } from '~/domain/models/get-product-by-id';
import { makeCreateProduct } from '~/infra/http/use-cases/factories/make-create-product';
import { makeDeleteProduct } from '~/infra/http/use-cases/factories/make-delete-product';
import { makeEditProduct } from '~/infra/http/use-cases/factories/make-edit-product';
import { makeGetAllProducts } from '~/infra/http/use-cases/factories/make-get-all-products';
import { makeGetProductById } from '~/infra/http/use-cases/factories/make-get-product-by-id';

const getAllProducts = async (query?: GetAllProducts) => {
  return await makeGetAllProducts()
    .send({ query })
    .then((res) => res.data);
};

const getProductById = async (query: GetProductById) => {
  return await makeGetProductById().send({ query });
};

const editProduct = async (body: EditProduct) => {
  return await makeEditProduct().send({ body });
};

const createProduct = async (body: CreateProduct) => {
  return await makeCreateProduct().send({ body });
};

const deleteProduct = async (id: number) => {
  return await makeDeleteProduct()
    .send({ params: { id } })
    .then((res) => res.data);
};

export default {
  deleteProduct,
  editProduct,
  createProduct,
  getProductById,
  getAllProducts,
};
