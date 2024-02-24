import { BiErrorCircle, BiInfoCircle } from 'react-icons/bi';

import { ErrorContainer, InfoContainer, TableCell, TableRow } from './styles';

interface IProps {
  loading: boolean;
  error: boolean;
  rows: [];
}

const TableRowMessage = (props: IProps) => {
  return (
    <>
      {props.loading && (
        <TableRow>
          <TableCell colSpan={5}>
            <InfoContainer>Carregando...</InfoContainer>
          </TableCell>
        </TableRow>
      )}
      {props.error && (
        <TableRow>
          <TableCell colSpan={5}>
            <ErrorContainer>
              <BiErrorCircle size={24} />
              Ocorreu um erro inesperado. Tente novamente mais tarde.
            </ErrorContainer>
          </TableCell>
        </TableRow>
      )}
      {!props.loading && props.rows.length === 0 && !props.error && (
        <TableRow>
          <TableCell colSpan={5}>
            <InfoContainer>
              <BiInfoCircle size={24} />
              Não encontramos resultados para sua pesquisa.
            </InfoContainer>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default TableRowMessage;
