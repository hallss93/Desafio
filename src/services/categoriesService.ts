import { CreateCategory } from '~/domain/models/create-category';
import { EditCategory } from '~/domain/models/edit-category';
import { GetAllCategories } from '~/domain/models/get-all-categories';
import { GetCategoryById } from '~/domain/models/get-category-by-id';
import { makeCreateCategory } from '~/infra/http/use-cases/factories/make-create-category';
import { makeDeleteCategory } from '~/infra/http/use-cases/factories/make-delete-category';
import { makeEditCategory } from '~/infra/http/use-cases/factories/make-edit-category';
import { makeGetAllCategories } from '~/infra/http/use-cases/factories/make-get-all-categories';
import { makeGetCategoryById } from '~/infra/http/use-cases/factories/make-get-category-by-id';

const getAllCategories = async (query?: GetAllCategories) => {
  return await makeGetAllCategories()
    .send({ query })
    .then((res) => res.data);
};

const getCategoryById = async (query: GetCategoryById) => {
  return await makeGetCategoryById().send({ query });
};

const editCategory = async (body: EditCategory) => {
  return await makeEditCategory().send({ body });
};

const createCategory = async (body: CreateCategory) => {
  return await makeCreateCategory().send({ body });
};

const deleteCategory = async (id: number) => {
  return await makeDeleteCategory()
    .send({ params: { id } })
    .then((res) => res.data);
};

export default {
  deleteCategory,
  editCategory,
  createCategory,
  getCategoryById,
  getAllCategories,
};
