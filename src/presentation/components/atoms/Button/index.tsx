import { StyledButton } from './styles';

interface IProps {
  handleClick?: any;
  text?: string;
}

const ButtonComponent = (props: IProps) => {
  return (
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
      data-testid="create-button"
      onClick={props.handleClick}
    >
      {props.text}
    </StyledButton>
  );
};

export default ButtonComponent;
