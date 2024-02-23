import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ProductsTable from '../../organisms/ProductsTable/ProductsTable';
import { Header, Page, PageContainer, StyledButton } from './styles';

const ProductsPage: React.FC = () => {
  const history = useNavigate();
  return (
    <Page>
      <Header>
        <Typography variant="h5" width={'50%'}>
          Produtos
        </Typography>
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
          onClick={() => history('/products/create')}
        >
          Criar
        </StyledButton>
      </Header>
      <PageContainer>
        <ProductsTable />
      </PageContainer>
    </Page>
  );
};

export default ProductsPage;
