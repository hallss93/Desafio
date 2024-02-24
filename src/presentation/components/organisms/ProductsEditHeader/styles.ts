import { Button } from '@mui/material';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
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
`;
