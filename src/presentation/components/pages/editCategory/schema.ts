import * as Yup from 'yup';

export const validationSchemaCategory = Yup.object().shape({
  name: Yup.string()
    .required('Nome é um campo obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(150, 'Nome deve ter no máximo 150 caracteres'),
  description: Yup.string()
    .required('Descrição é um campo obrigatório')
    .min(3, 'Descrição deve ter no mínimo 3 caracteres')
    .max(150, 'Descrição deve ter no máximo 150 caracteres'),
});
