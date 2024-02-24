import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Avatar,
  Box,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TableSortLabel,
} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { format } from 'date-fns';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import IProduct from '~/models/productModel';

import ButtonComponent from '../../atoms/Button';
import HeaderCellMui from '../../atoms/HeaderCellMui';
import TableRowMessage from '../../molecules/TableRowMessage';
import { deleteProduct, getProducts } from './../../../store/modules/products/actions';
import {
  Divider,
  HeaderCell,
  InputSearchComponent,
  PaginationContainer,
  SearchContainer,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from './styles';

type Order = 'asc' | 'desc';

const ProductsTable = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [orderBy, setOrderBy] = useState('title');
  const [order, setOrder] = useState<Order>('desc');

  const { products, pagination, productsError, productsLoading, deleteLoading } = useSelector(
    (state: any) => state.products,
  );
  const history = useNavigate();

  const getList = () => {
    dispatch(getProducts({ page: page - 1, query, order, orderBy }) as any);
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
    dispatch(getProducts({ page: p - 1, query, order, orderBy }) as any);
  };

  const handlKeyPressSearch = (e: any) => {
    if (e.keyCode == 13) {
      handleClickSearch();
    }
  };

  const handleClickSearch = () => {
    setPage(1);
    dispatch(getProducts({ page: 0, query, order, orderBy }) as any);
  };

  const handleChangeSearch = (e: any) => {
    setQuery(e.target.value);
  };

  const createSortHandler = (property: keyof IProduct) => (event: React.MouseEvent<unknown>) => {
    const isAsc = orderBy === property && order === 'asc';
    const newOrder = isAsc ? 'desc' : 'asc';
    setOrder(newOrder);
    setOrderBy(property);
    dispatch(getProducts({ page: page - 1, query, order: newOrder, orderBy: property }) as any);
  };

  return (
    <>
      <TableContainer>
        <SearchContainer>
          <InputSearchComponent
            label="Buscar"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onKeyDown={handlKeyPressSearch}
            onChange={handleChangeSearch}
            value={query}
          />
          <ButtonComponent handleClick={handleClickSearch} text="Buscar" />
        </SearchContainer>
        <Table>
          <TableHead>
            <TableRow>
              <HeaderCellMui
                handleSort={createSortHandler}
                orderBy={orderBy}
                order={order}
                name="title"
                title="Nome"
              ></HeaderCellMui>
              <HeaderCell>Descrição</HeaderCell>
              <HeaderCellMui
                handleSort={createSortHandler}
                orderBy={orderBy}
                order={order}
                name="brand"
                title="Marca"
              ></HeaderCellMui>
              <HeaderCell>Preço</HeaderCell>
              <HeaderCell>Desconto (%)</HeaderCell>
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
            <TableRowMessage
              loading={productsLoading}
              rows={products}
              error={productsError}
            ></TableRowMessage>
            {products.map((row: IProduct) => (
              <Fragment key={row.id}>
                <TableRow>
                  <TableCell>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                      <ListItem>
                        {row.image && (
                          <ListItemAvatar>
                            <Avatar alt={row.title} src={row.image} />
                          </ListItemAvatar>
                        )}
                        <ListItemText primary={row.title} />
                      </ListItem>
                    </List>
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>R$ {row.price}</TableCell>
                  <TableCell>{row.discountPercentage}</TableCell>
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
