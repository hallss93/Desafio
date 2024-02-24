import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import ICategory from '~/models/categoryModel';
import IProduct from '~/models/productModel';
import { getCategories } from '~/presentation/store/modules/categories/actions';
import { showMessage } from '~/presentation/store/modules/messages/actions';
import { convertCurrencyToNumber, removePercentSimbol } from '~/presentation/utils';

import NumericFormatCustom from '../../atoms/NumericFormatCustom';
import InputFileUpload from '../../molecules/FileInput';
import ProductsEditHeader from '../../organisms/ProductsEditHeader/ProductsEditHeader';
import productsService from './../../../../services/productsService';
import { validationSchemaProduct } from './schema';
import {
  CustomAutoComplete,
  CustomTextField,
  FormContainer,
  Header,
  Page,
  PageContainer,
  ProductImage,
} from './styles';

const EditProductPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [categoryObject, setCategoryObject] = useState<any>(null);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState<Blob>();
  const [image, setImage] = useState();
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const { categories } = useSelector((state: any) => state.categories);

  const { id } = useParams<{ id: string }>();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchemaProduct) });

  const onSubmit = (data: any) => {
    handleSave({ ...data, category: categoryObject.id, id });
  };

  useEffect(() => {
    if (id !== 'create') {
      productsService.getProductById({ id: Number(id) }).then((response) => {
        setValue('title', response.title);
        setValue('brand', response.brand);
        setValue('description', response.description);
        setValue('category', response.category);
        setDiscountPercentage(response.discountPercentage);
        setPrice(response.price);
        setImage(response.image);

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
    formData.append('discountPercentage', removePercentSimbol(String(data.discountPercentage)));
    formData.append('price', convertCurrencyToNumber(String(data.price)));
    formData.append('brand', data.brand);
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
          dispatch(showMessage('Ocorreu um erro ao tentar Atualizar o Produto', 'error') as any);
        });
    } else {
      await productsService
        .createProduct(formData)
        .then(() => {
          successMessageRedirect();
        })
        .catch(() => {
          dispatch(showMessage('Ocorreu um erro ao tentar Criar o Produto', 'error') as any);
        });
    }
  }

  function successMessageRedirect() {
    dispatch(showMessage(`Produto ${id !== 'create' ? 'editado' : 'criado'} com sucesso!`) as any);
    history('/products');
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
        <ProductsEditHeader
          handleClickCancel={() => history('/products')}
          handleClickSave={handleSubmit(onSubmit)}
        ></ProductsEditHeader>
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

            <Grid item xs={12} sm={12} md={6}>
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

            <Grid item xs={12} sm={12} md={6}>
              <CustomTextField
                label="Marca"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                {...register('brand')}
                error={!!errors.brand}
              />
              <Typography variant="caption" color="red">
                {errors.brand?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
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

            <Grid item xs={12} sm={12} md={6}>
              <CustomTextField
                InputProps={{
                  inputComponent: NumericFormatCustom as any,
                }}
                inputProps={{
                  prefix: 'R$',
                  type_format: 'currency',
                }}
                value={price}
                label="Preço"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
                {...register('price')}
                error={!!errors.price}
              />
              <Typography variant="caption" color="red">
                {errors.price?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <CustomTextField
                InputProps={{
                  inputComponent: NumericFormatCustom as any,
                }}
                inputProps={{
                  prefix: '%',
                  max: '100',
                }}
                label="Desconto (%)"
                variant="standard"
                fullWidth
                value={discountPercentage}
                InputLabelProps={{ shrink: true }}
                {...register('discountPercentage')}
                error={!!errors.discountPercentage}
              />
              <Typography variant="caption" color="red">
                {errors.discountPercentage?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
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
          </Grid>
        </FormContainer>
      </PageContainer>
    </Page>
  );
};

export default EditProductPage;
