import styled from 'styled-components';

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
