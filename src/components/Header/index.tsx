import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [path, setPath] = useState('');
  const {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <Container size={size} currentPath={path}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">Listagem</Link>
          <Link to="/import">Importar</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
