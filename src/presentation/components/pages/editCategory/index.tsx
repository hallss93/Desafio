import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import ICategory from '~/models/categoryModel';
import { showMessage } from '~/presentation/store/modules/messages/actions';

import categoriesService from './../../../../services/categoriesService';
import { validationSchemaCategory } from './schema';
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
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaCategory),
  });

  const onSubmit = (data: any) => {
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
          successMessageRedirect();
        })
        .catch(() => {
          dispatch(showMessage('Ocorreu um erro ao tentar Atualizar a Categorria', 'error') as any);
        });
    } else {
      await categoriesService
        .createCategory(data)
        .then(() => {
          successMessageRedirect();
        })
        .catch(() => {
          dispatch(showMessage('Ocorreu um erro ao tentar Criar a Categorria', 'error') as any);
        });
    }
  }

  function successMessageRedirect() {
    dispatch(
      showMessage(`Categoria ${id !== 'create' ? 'editada' : 'criada'} com sucesso!`) as any,
    );
    history('/categories');
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
            onClick={() => history('/categories')}
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
                error={!!errors.name}
              />
              <Typography variant="caption" color="red">
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
                error={!!errors.description}
              />
              <Typography variant="caption" color="red">
                {errors.description?.message}
              </Typography>
            </Grid>
          </Grid>
        </FormContainer>
      </PageContainer>
    </Page>
  );
};

export default EditCategoryPage;
