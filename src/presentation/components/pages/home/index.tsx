import React from 'react';
import { useNavigate } from 'react-router-dom';

type HomePageProps = {};

import { MainContainer } from './styles';

const HomePage: React.FC<HomePageProps> = () => {
  const text = 'Clique aqui para ir pra login';
  const history = useNavigate();
  return (
    <MainContainer>
      <button
        onClick={() => {
          history('/login');
        }}
      >
        {text}
      </button>
    </MainContainer>
  );
};

export default HomePage;
