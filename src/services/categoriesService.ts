import { GetAllCategories } from '~/domain/models/get-all-categories';
import { makeDeleteCategory } from '~/infra/http/use-cases/factories/make-delete-category';
import { makeGetAllCategories } from '~/infra/http/use-cases/factories/make-get-all-categories';

const getAllCategories = async (query?: GetAllCategories) => {
  return await makeGetAllCategories()
    .send({ query })
    .then((res) => res.data);
};

const deleteCategory = async (id: number) => {
  return await makeDeleteCategory()
    .send({ params: { id } })
    .then((res) => res.data);
};

export default {
  deleteCategory,
  getAllCategories,
};
