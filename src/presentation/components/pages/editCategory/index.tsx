import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Grid, Snackbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import ICategory from '~/models/categoryModel';

import categoriesService from './../../../../services/categoriesService';
import {
  ButtonsContainer,
  CustomTextField,
  FormContainer,
  Header,
  Page,
  PageContainer,
  StyledButton,
} from './styles';

const EditCategoryPage = () => {
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const history = useNavigate();
  const { id } = useParams<{ id: string }>();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nome é um campo obrigatório')
      .min(3, 'Nome deve ter no mínimo 3 caracteres')
      .max(150, 'Nome deve ter no máximo 150 caracteres'),
    description: Yup.string()
      .required('Descrição é um campo obrigatório')
      .min(3, 'Descrição deve ter no mínimo 3 caracteres')
      .max(150, 'Descrição deve ter no máximo 150 caracteres'),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
    handleSave(data);
  };

  useEffect(() => {
    if (id !== 'create') {
      categoriesService.getCategoryById({ id: Number(id) }).then((response) => {
        setValue('name', response.name);
        setValue('description', response.description);
      });
    }
  }, [id]);

  async function handleSave(data: ICategory) {
    if (id !== 'create') {
      await categoriesService
        .editCategory({
          ...data,
          id: Number(id),
        })
        .then(() => {
          setOpenSuccess(true);
          setTimeout(() => {
            history('/category');
          }, 1000);
        })
        .catch(() => {
          setOpenError(true);
        });
    } else {
      await categoriesService
        .createCategory(data)
        .then(() => {
          setOpenSuccess(true);
          setTimeout(() => {
            history('/category');
          }, 1000);
        })
        .catch(() => {
          setOpenError(true);
        });
    }
  }

  function handleClose() {
    setOpenError(false);
    setOpenSuccess(false);
  }

  return (
    <Page>
      <Header>
        <Typography variant="h5" width={'40%'}>
          {id !== 'create' ? 'Editar Categoria' : 'Criar Categoria'}{' '}
        </Typography>
        <ButtonsContainer>
          <StyledButton
            variant="outlined"
            sx={{
              borderColor: '#E6226D',
              color: '#E6226D',
              '&:hover': {
                borderColor: '#E6226D',
                color: '#E6226D',
                backgroundColor: '#e7236e0d',
              },
            }}
            onClick={() => history('/category')}
            data-testid="cancel-button"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            variant="contained"
            sx={{
              backgroundColor: '#00C390',
              color: '#FFFFFF',
              '&:hover': {
                bgcolor: 'rgb(0, 154, 113)',
                color: '#FFFFFF',
              },
            }}
            onClick={handleSubmit(onSubmit)}
            data-testid="save-button"
          >
            Salvar
          </StyledButton>
        </ButtonsContainer>
      </Header>
      <PageContainer>
        <FormContainer>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <CustomTextField
                label="Nome da Categoria"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                {...register('name')}
                error={errors.name ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.name?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomTextField
                label="Descrição"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                {...register('description')}
                error={errors.description ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.description?.message}
              </Typography>
            </Grid>
          </Grid>
        </FormContainer>
      </PageContainer>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openError}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
          Ocorreu um erro!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openSuccess}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          Categoria {id !== 'create' ? 'editada' : 'criada'} com sucesso;
        </Alert>
      </Snackbar>
    </Page>
  );
};

export default EditCategoryPage;
