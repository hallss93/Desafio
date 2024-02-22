import { Fragment, useEffect } from 'react';
import { BiErrorCircle, BiInfoCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ICategory from '~/models/categoryModel';

import { getCategories } from './../../../store/modules/categories/actions';
import {
  Divider,
  EditLink,
  ErrorContainer,
  HeaderCell,
  InfoContainer,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from './styles';

const CategoriesTable = () => {
  const dispatch = useDispatch();
  const { categories, categoriesError, categoriesLoading } = useSelector(
    (state: any) => state.categories,
  );
  const history = useNavigate();

  useEffect(() => {
    dispatch(getCategories() as any);
  }, []);

  if (categoriesLoading) {
    return <InfoContainer>Carregando...</InfoContainer>;
  }

  if (!categoriesLoading && !categories?.length) {
    return (
      <InfoContainer>
        <BiInfoCircle size={24} />
        Não encontramos resultados para sua pesquisa.
      </InfoContainer>
    );
  }

  if (categoriesError) {
    return (
      <ErrorContainer>
        <BiErrorCircle size={24} />
        Ocorreu um erro inesperado. Tente novamente mais tarde.
      </ErrorContainer>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <HeaderCell>Nome</HeaderCell>
            <HeaderCell>Descrição</HeaderCell>
            <HeaderCell>Criado</HeaderCell>
            <HeaderCell>Atualizado</HeaderCell>
            <HeaderCell>Ação</HeaderCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={6}>
              <Divider />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row: ICategory) => (
            <Fragment key={row.id}>
              <TableRow>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.created}</TableCell>
                <TableCell>{row.updated}</TableCell>
                <TableCell>
                  <EditLink onClick={() => history(`/category/${row.id}`)}>Editar</EditLink>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={6}>
                  <Divider />
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoriesTable;
