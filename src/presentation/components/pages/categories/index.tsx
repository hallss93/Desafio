import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CategoriesTable from '../../organisms/CategoriesTable/CategoriesTable';
import { Header, Page, PageContainer, StyledButton } from './styles';

const CategoriesPage: React.FC = () => {
  const history = useNavigate();
  return (
    <Page>
      <Header>
        <Typography variant="h5" width={'50%'}>
          Categorias
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
          onClick={() => history('/category/create')}
        >
          Criar
        </StyledButton>
      </Header>
      <PageContainer>
        <CategoriesTable />
      </PageContainer>
    </Page>
  );
};

export default CategoriesPage;
