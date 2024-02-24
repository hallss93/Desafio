import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { format } from 'date-fns';
import { Fragment } from 'react';

import IProduct from '~/models/productModel';

import { Divider, TableCell, TableRow } from './styles';

interface IProps {
  rows: Array<IProduct>;
  handleClickDelete: any;
  handleClickEdit: (id: number) => void;
}

const ProductsTableRow = (props: IProps) => {
  return (
    <>
      {props.rows.map((row: IProduct) => (
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
              <IconButton aria-label="delete" onClick={() => props.handleClickDelete(row.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => props.handleClickEdit(row.id)}>
                <EditIcon color="primary" />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={9}>
              <Divider />
            </TableCell>
          </TableRow>
        </Fragment>
      ))}
    </>
  );
};

export default ProductsTableRow;
