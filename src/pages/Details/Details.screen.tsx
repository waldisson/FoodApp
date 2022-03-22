import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {
  Container,
  Content,
  Header,
  DetailsBack,
  DetailsBackAndName,
  DetailsButtonLike,
  DetailsTitle,
  DetailsContainer,
  DetailsDescription,
  DetailsImage,
  DetailsFooter,
  DetailsTotalAndValue,
  DetailsTotal,
  DetailsValue,
  DetailsUpAndDown,
  DetailsButtonDown,
  DetailsButtonText,
  DetailsAmount,
  DetailsButtonUp,
  DetailsContent,
  DetailsAddCart,
  DetailsAddCartText,
  DetailsAreaButton,
  Icone,
} from './Details.styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const BackIcon = require('../../assets/icons/left-arrow.png');
  const HeartIcon = require('../../assets/icons/coracao.png');
  const ProduIcon = require('../../assets/img/hamburguer.jpeg');

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Content>
        <Header>
          <DetailsBackAndName>
            <DetailsBack onPress={handleBackPress}>
              <Icone source={BackIcon} />
              <DetailsTitle>Nome</DetailsTitle>
            </DetailsBack>
          </DetailsBackAndName>
          <DetailsButtonLike>
            <Icone source={HeartIcon} />
          </DetailsButtonLike>
        </Header>
        <DetailsContainer>
          <DetailsImage source={ProduIcon} />
        </DetailsContainer>
        <DetailsDescription>Descrição......</DetailsDescription>
      </Content>
      <DetailsFooter>
        <DetailsContent>
          <DetailsTotalAndValue>
            <DetailsTotal>Total</DetailsTotal>
            <DetailsValue>R$0,00</DetailsValue>
          </DetailsTotalAndValue>
          <DetailsUpAndDown>
            <DetailsButtonDown>
              <DetailsButtonText>-</DetailsButtonText>
            </DetailsButtonDown>
            <DetailsAmount>0</DetailsAmount>
            <DetailsButtonUp>
              <DetailsButtonText>+</DetailsButtonText>
            </DetailsButtonUp>
          </DetailsUpAndDown>
        </DetailsContent>
        <DetailsAreaButton>
          <DetailsAddCart>
            <DetailsAddCartText>Adicionar ao carrinho</DetailsAddCartText>
          </DetailsAddCart>
        </DetailsAreaButton>
      </DetailsFooter>
    </Container>
  );
};

export default Home;
