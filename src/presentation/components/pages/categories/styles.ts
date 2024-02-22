import { Button } from '@mui/material';
import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

export const StyledButton = styled(Button)`
  width: max-content;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  text-transform: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-right: 24px !important;
  margin-left: 24px !important;
`;
