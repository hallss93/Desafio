import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import Logo from '../../../assets/images/logo.svg';
import { Divider, LogoContainer, MenuContainer, MenuItem, SideMenuContainer } from './styles';

const SideMenu: React.FC = () => {
  const location = window.location.pathname;
  const history = useNavigate();

  const items = [
    { name: 'Produtos', path: '/products' },
    { name: 'Categorias', path: '/categories' },
  ];

  return (
    <SideMenuContainer>
      <LogoContainer>
        <ReactSVG src={Logo} />
      </LogoContainer>
      <Divider />
      <MenuContainer>
        {items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              isSelected={location === item.path}
              onClick={() => history(item.path)}
            >
              <span>{item.name}</span>
            </MenuItem>
          );
        })}
      </MenuContainer>
    </SideMenuContainer>
  );
};

export default SideMenu;
