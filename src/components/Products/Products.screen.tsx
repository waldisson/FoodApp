import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {
  Container,
  ProductButton,
  ProductView,
  ProductImgButton,
  ProductTitleAndLike,
  ProductTitle,
  ProductLike,
  ProductValue,
} from './Products.styles';

const Products: React.FC = () => {
  const navigation = useNavigation();
  const CartIcon = require('../../assets/icons/coracao.png');
  const ProduIcon = require('../../assets/img/hamburguer.jpeg');

  const handleDetails = () => {
    navigation.navigate('Details');
  };
  return (
    <Container>
      <ProductButton onPress={handleDetails}>
        <ProductView>
          <ProductImgButton source={ProduIcon} />
          <ProductTitleAndLike>
            <ProductTitle>Nome</ProductTitle>
            <ProductLike source={CartIcon} />
          </ProductTitleAndLike>
          <ProductValue>R$ 20,90</ProductValue>
        </ProductView>
      </ProductButton>

      <ProductButton>
        <ProductView>
          <ProductImgButton source={ProduIcon} />
          <ProductTitleAndLike>
            <ProductTitle>Nome</ProductTitle>
            <ProductLike source={CartIcon} />
          </ProductTitleAndLike>
          <ProductValue>R$ 20,90</ProductValue>
        </ProductView>
      </ProductButton>
    </Container>
  );
};

export default Products;
