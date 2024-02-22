import { GetAllCategories } from '~/domain/models/get-all-categories';
import { makeGetAllCategories } from '~/infra/http/use-cases/factories/make-get-all-categories';

const getAllCategories = async (query?: GetAllCategories) => {
  return await makeGetAllCategories()
    .send({ query })
    .then((res) => res.data);
};

export default {
  getAllCategories,
};
