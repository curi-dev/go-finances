import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {

  return (

  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <div>
          <NavLink to='/' exact activeClassName='active'>Listagem</NavLink>
        </div>
        <div>
          <NavLink to='/import' exact activeClassName='active'>Importar</NavLink>
        </div>       
      </nav>
    </header>
  </Container>
  );
}

export default Header;
