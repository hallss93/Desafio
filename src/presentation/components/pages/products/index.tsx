import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ButtonComponent from '../../atoms/Button';
import ProductsTable from '../../organisms/ProductsTable/ProductsTable';
import { Header, Page, PageContainer } from './styles';

const ProductsPage: React.FC = () => {
  const history = useNavigate();
  return (
    <Page>
      <Header>
        <Typography variant="h5" width={'50%'}>
          Produtos
        </Typography>
        <ButtonComponent handleClick={() => history('/products/create')} text="Criar" />
      </Header>
      <PageContainer>
        <ProductsTable />
      </PageContainer>
    </Page>
  );
};

export default ProductsPage;
