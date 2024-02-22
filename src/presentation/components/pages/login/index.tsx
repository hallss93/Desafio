import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MainContainer } from './styles';

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  const text = 'Clique aqui para retornar para a página inicial';
  const history = useNavigate();
  return (
    <MainContainer>
      <button
        onClick={() => {
          history('/');
        }}
      >
        {text}
      </button>
    </MainContainer>
  );
};

export default LoginPage;
