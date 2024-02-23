import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { format } from 'date-fns';
import React, { Fragment, useEffect, useState } from 'react';
import { BiErrorCircle, BiInfoCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import IProduct from '~/models/productModel';

import { deleteProduct, getProducts } from './../../../store/modules/products/actions';
import {
  Divider,
  ErrorContainer,
  HeaderCell,
  InfoContainer,
  PaginationContainer,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from './styles';

const ProductsTable = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(0);
  const [page, setPage] = useState(1);

  const { products, pagination, productsError, productsLoading, deleteLoading } = useSelector(
    (state: any) => state.products,
  );
  const history = useNavigate();

  const getList = () => {
    dispatch(getProducts(page - 1) as any);
  };

  useEffect(() => {
    getList();
  }, []);

  const handleClickOpen = (id: number) => {
    setItemSelected(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await dispatch(deleteProduct(itemSelected) as any);
    setOpen(false);
    getList();
  };

  const handlePageChange = (_e: React.ChangeEvent<unknown>, p: number) => {
    if (p === page) return;

    setPage(p);
    dispatch(getProducts(p - 1) as any);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <HeaderCell>Nome</HeaderCell>
              <HeaderCell>Descrição</HeaderCell>
              <HeaderCell>Categoria</HeaderCell>
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
            {productsLoading && (
              <TableRow>
                <TableCell colSpan={5}>
                  <InfoContainer>Carregando...</InfoContainer>
                </TableCell>
              </TableRow>
            )}
            {productsError && (
              <TableRow>
                <TableCell colSpan={5}>
                  <ErrorContainer>
                    <BiErrorCircle size={24} />
                    Ocorreu um erro inesperado. Tente novamente mais tarde.
                  </ErrorContainer>
                </TableCell>
              </TableRow>
            )}
            {!productsLoading && products.length === 0 && !productsError && (
              <TableRow>
                <TableCell colSpan={5}>
                  <InfoContainer>
                    <BiInfoCircle size={24} />
                    Não encontramos resultados para sua pesquisa.
                  </InfoContainer>
                </TableCell>
              </TableRow>
            )}
            {products.map((row: IProduct) => (
              <Fragment key={row.id}>
                <TableRow>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.category?.name}</TableCell>
                  <TableCell>{format(row.created, 'dd/mm/yyyy H:mma')}</TableCell>
                  <TableCell>{format(row.updated, 'dd/mm/yyyy H:mma')}</TableCell>
                  <TableCell>
                    <IconButton aria-label="delete" onClick={() => handleClickOpen(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => history(`/products/${row.id}`)}>
                      <EditIcon color="primary" />
                    </IconButton>
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
        <PaginationContainer
          count={pagination.totalPages}
          shape="rounded"
          onChange={handlePageChange}
          page={page}
        />
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Apagar Produto</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja apagar essa produto? Essa ação é irreversível!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <LoadingButton
            loading={deleteLoading}
            variant="contained"
            color="primary"
            onClick={handleDelete}
          >
            Apagar
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductsTable;
