import { Pagination } from '@mui/material';
import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 100%;
  font-family: 'Roboto', sans-serif;
  background: #ffffff;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  padding: 1.5rem;
  border-radius: 4px;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
`;

export const TableHead = styled.thead`
  padding-top: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.17px;
  color: rgba(0, 0, 0, 0.87);
`;

export const TableBody = styled.tbody`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.17px;
  color: rgba(0, 0, 0, 0.87);
`;

export const TableRow = styled.tr`
  font-family: 'Roboto', sans-serif;
`;

export const TableCell = styled.td`
  min-width: 76px;
  max-width: 25%;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  word-break: break-word;
`;

export const HeaderCell = styled.td`
  min-width: 76px;
  padding: 8px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  text-align: left;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  width: 100%;
  gap: 10px;
`;

export const Divider = styled.div`
  width: calc(100% + 4rem);
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
  margin-left: -2rem;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.17px;
  color: #541313;
  background-color: #fbeaea;
  border-radius: 4px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.17px;
  color: #013654;
  background-color: #e6f3fa;
  border-radius: 4px;
`;

export const EditLink = styled.div`
  color: #e6226d;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.15px;
  text-decoration: underline;
  cursor: pointer;
`;

export const PaginationContainer = styled(Pagination)`
  ul {
    justify-content: center;
  }
`;
