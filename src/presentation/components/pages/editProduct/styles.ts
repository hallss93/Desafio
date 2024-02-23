import { Autocomplete, Button, TextField } from '@mui/material';
import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding-right: 24px;
  padding-left: 24px;
  overflow-y: auto;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 5px 5px -3px rgba(0, 0, 0, 0.2);
  padding: 16px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  margin-top: 16px;
  box-sizing: border-box;
`;

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

export const CustomTextField = styled(TextField)({
  '& .MuiInput-underline:hover:not(.Mui-disabled={!editMode}):before': {
    borderBottomColor: '#E6226D',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#E6226D',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: '#E6226D',
  },
});

export const CustomAutoComplete = styled(Autocomplete)({
  '*': {
    marginBottom: '0px',
  },
});

export const ProductImage = styled.img`
  width: 180px;
  max-width: 180px;
  height: auto;
  max-height: 180px;
  object-fit: cover;
  margin-bottom: 10px;
`;
