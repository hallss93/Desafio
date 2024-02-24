import { ButtonsContainer, StyledButton } from './styles';

interface IProps {
  handleClickCancel: any;
  handleClickSave: any;
}
const ProductsEditHeader = (props: IProps) => {
  return (
    <ButtonsContainer>
      <StyledButton
        variant="outlined"
        sx={{
          borderColor: '#E6226D',
          color: '#E6226D',
          '&:hover': {
            borderColor: '#E6226D',
            color: '#E6226D',
            backgroundColor: '#e7236e0d',
          },
        }}
        onClick={props.handleClickCancel}
        data-testid="cancel-button"
      >
        Cancelar
      </StyledButton>
      <StyledButton
        variant="contained"
        sx={{
          backgroundColor: '#00C390',
          color: '#FFFFFF',
          '&:hover': {
            bgcolor: 'rgb(0, 154, 113)',
            color: '#FFFFFF',
          },
        }}
        onClick={props.handleClickSave}
        data-testid="save-button"
      >
        Salvar
      </StyledButton>
    </ButtonsContainer>
  );
};

export default ProductsEditHeader;
