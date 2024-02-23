import { Typography } from '@mui/material';

import { Header, Page } from './styles';

const ProductsPage: React.FC = () => {
  return (
    <Page>
      <Header>
        <Typography variant="h5" width={'50%'}>
          Produtos
        </Typography>
      </Header>
    </Page>
  );
};

export default ProductsPage;
