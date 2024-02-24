import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import ICategory from '~/models/categoryModel';
import IProduct from '~/models/productModel';
import { getCategories } from '~/presentation/store/modules/categories/actions';

import InputFileUpload from '../../molecules/FileInput';
import productsService from './../../../../services/productsService';
import {
  ButtonsContainer,
  CustomAutoComplete,
  CustomTextField,
  FormContainer,
  Header,
  Page,
  PageContainer,
  ProductImage,
  StyledButton,
} from './styles';

const EditProductPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [categoryObject, setCategoryObject] = useState<any>(null);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState<Blob>();
  const [image, setImage] = useState();

  const { categories } = useSelector((state: any) => state.categories);

  const { id } = useParams<{ id: string }>();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Nome é um campo obrigatório')
      .min(3, 'Nome deve ter no mínimo 3 caracteres')
      .max(150, 'Nome deve ter no máximo 150 caracteres'),
    description: Yup.string()
      .required('Descrição é um campo obrigatório')
      .min(3, 'Descrição deve ter no mínimo 3 caracteres')
      .max(150, 'Descrição deve ter no máximo 150 caracteres'),
    category: Yup.string().required('Categoria é um campo obrigatório'),
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
    handleSave({ ...data, category: categoryObject.id, id });
  };

  useEffect(() => {
    if (id !== 'create') {
      productsService.getProductById({ id: Number(id) }).then((response) => {
        setValue('title', response.title);
        setValue('description', response.description);
        setValue('category', response.category);
        setImage(response.image);
        console.log(response.image);
        const category = categories.find((i: ICategory) => i.id === response.category);

        if (category) setCategoryObject({ id: category.id, label: category.name });
      });
    }
  }, [categories]);

  const getList = () => {
    dispatch(getCategories(0, 0) as any);
  };

  useEffect(() => {
    getList();
  }, []);

  async function handleSave(data: IProduct) {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', categoryObject.id);
    if (file) formData.append('image', file);

    if (id !== 'create') {
      formData.append('id', String(data.id));
      await productsService
        .editProduct(Number(id), formData)
        .then(() => {
          successMessageRedirect();
        })
        .catch(() => {
          setOpenError(true);
        });
    } else {
      await productsService
        .createProduct(formData)
        .then(() => {
          successMessageRedirect();
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

  function successMessageRedirect() {
    setOpenSuccess(true);
    setTimeout(() => {
      history('/products');
    }, 1000);
  }

  function handleChangeImage(event: any) {
    if (event.target.files.length) {
      setFile(event.target.files[0]);
      const tgt = event.target,
        files = tgt.files;

      if (FileReader && files.length) {
        const fr = new FileReader();
        fr.onload = function () {
          document?.getElementById('product-img')?.setAttribute('src', fr.result as string);
        };
        fr.readAsDataURL(files[0]);
      }
    }
  }

  return (
    <Page>
      <Header>
        <Typography variant="h5" width={'40%'}>
          {id !== 'create' ? 'Editar produto' : 'Criar Produto'}{' '}
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
            onClick={() => history('/products')}
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
            <Grid
              item
              xs={12}
              sm={12}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {file && <ProductImage id="product-img" alt="Produto" />}
              {!file && image && <ProductImage id="product-img" src={image} alt="Produto" />}
              <InputFileUpload
                description="Escolher Imagem"
                handleChange={handleChangeImage}
              ></InputFileUpload>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomAutoComplete
                disablePortal
                options={categories.map((i: ICategory) => ({ id: i.id, label: i.name }))}
                value={categoryObject}
                inputValue={inputValue}
                onChange={(_, newValue) => setCategoryObject(newValue)}
                onInputChange={(_, newInputValue: string) => setInputValue(newInputValue)}
                getOptionLabel={(option: any) => option.label}
                isOptionEqualToValue={(option: any, value: any) => option?.label === value?.label}
                renderInput={(params) => (
                  <TextField
                    variant="standard"
                    {...params}
                    label="Categoria"
                    InputLabelProps={{ shrink: true }}
                    {...register('category')}
                    error={!!errors.category}
                  />
                )}
              />
              <Typography variant="caption" color="red">
                {errors.category?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomTextField
                label="Nome do Produto"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                {...register('title')}
                error={!!errors.title}
              />
              <Typography variant="caption" color="red">
                {errors.title?.message}
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
          Produto {id !== 'create' ? 'editada' : 'criada'} com sucesso;
        </Alert>
      </Snackbar>
    </Page>
  );
};

export default EditProductPage;
