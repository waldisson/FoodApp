import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e8e8e8;
`;
export const Content = styled.SafeAreaView`
  margin: 20px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: #fd7f20;
  font-size: 18px;
  margin-top: 35px;
  font-weight: 500;
`;

export const Logo = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #fd7f20;
`;

export const SearchAndCart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;
export const SearchInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  border-radius: 20px;
  background-color: #fff;
`;

export const Search = styled.TextInput`
  width: 75%;
  height: 45px;
  border-radius: 20px;
  padding-left: 15px;
  background-color: #fff;
`;

export const Cart = styled.View`
  background-color: #fff;
  width: 13%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
`;

export const CartIcon = styled.Text``;
export const Icone = styled.Image`
  width: 20px;
  height: 20px;
`;
