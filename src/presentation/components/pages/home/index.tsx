import React from 'react';

type HomePageProps = {};

import { ReactSVG } from 'react-svg';

import Logo from '../../../assets/images/logo.svg';
import { LogoContainer } from '../../organisms/SideMenu/styles';
import { MainContainer } from './styles';

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <MainContainer>
      <LogoContainer>
        <ReactSVG src={Logo} />
      </LogoContainer>
    </MainContainer>
  );
};

export default HomePage;
