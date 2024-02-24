import { Box, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { HeaderCell } from './styles';

interface IProps {
  handleSort: any;
  orderBy: string;
  order: 'asc' | 'desc';
  name: string;
  title: string;
}

const HeaderCellMui = (props: IProps) => {
  return (
    <HeaderCell sortDirection={props.orderBy === props.name ? props.order : false}>
      <TableSortLabel
        active={props.orderBy === props.name}
        direction={props.orderBy === props.name ? props.order : 'asc'}
        onClick={props.handleSort(props.name)}
      >
        {props.title}
        {props.orderBy === props.name ? (
          <Box component="span" sx={visuallyHidden}>
            {props.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        ) : null}
      </TableSortLabel>
    </HeaderCell>
  );
};

export default HeaderCellMui;
