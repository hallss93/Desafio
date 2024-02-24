import * as Yup from 'yup';

export const validationSchemaProduct = Yup.object().shape({
  title: Yup.string()
    .required('Nome é um campo obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(150, 'Nome deve ter no máximo 150 caracteres'),
  brand: Yup.string()
    .required('Marca é um campo obrigatório')
    .min(3, 'Marca deve ter no mínimo 3 caracteres')
    .max(50, 'Marca deve ter no máximo 50 caracteres'),
  description: Yup.string()
    .required('Descrição é um campo obrigatório')
    .min(3, 'Descrição deve ter no mínimo 3 caracteres')
    .max(150, 'Descrição deve ter no máximo 150 caracteres'),
  category: Yup.string().required('Categoria é um campo obrigatório'),
  discountPercentage: Yup.string().notRequired(),
  price: Yup.string().required('Preço é um campo obrigatório'),
});
