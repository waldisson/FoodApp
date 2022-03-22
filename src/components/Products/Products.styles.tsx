import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductButton = styled.TouchableOpacity`
  height: 170px;
  width: 45%;
  border-radius: 15px;
  background-color: #fff;
`;
export const ProductView = styled.View``;
export const ProductImgButton = styled.Image`
  /*Trocar por image*/
  height: 100px;
  width: 100%;
  border-radius: 15px;
`;

export const ProductTitleAndLike = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 12px;
`;

export const ProductTitle = styled.Text``;

export const ProductLike = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ProductValue = styled.Text`
  margin-top: 8px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
`;
