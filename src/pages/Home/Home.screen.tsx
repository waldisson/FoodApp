import React from 'react';
import {Categories, Products} from '../../components';

import {
  Container,
  Content,
  SearchAndCart,
  SearchInput,
  Header,
  Title,
  Logo,
  Search,
  Icone,
  Cart,
} from './Home.styles';

const Home: React.FC = () => {
  const SearchIcon = require('../../assets/icons/search.png');
  const CartIcon = require('../../assets/icons/carrinho.png');

  return (
    <Container>
      <Content>
        <Header>
          <Logo>Food App</Logo>
          <SearchAndCart>
            <SearchInput>
              <Search placeholder="Pesquisar" />
              <Icone source={SearchIcon} />
            </SearchInput>

            <Cart>
              <Icone source={CartIcon} />
            </Cart>
          </SearchAndCart>
        </Header>
        <Title>Categorias</Title>
        <Categories />
        <Title>Produtos</Title>
        <Products />
      </Content>
    </Container>
  );
};

export default Home;
