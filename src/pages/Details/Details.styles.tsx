import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e8e8e8;
`;
export const Content = styled.SafeAreaView`
  margin: 20px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const DetailsBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const Icone = styled.Image`
  width: 16px;
  height: 16px;
`;
export const DetailsBackAndName = styled.View``;
export const DetailsTitle = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;
export const DetailsButtonLike = styled.TouchableOpacity``;
export const DetailsContainer = styled.View`
  width: 100%;
  margin-top: 30px;
`;
export const DetailsImage = styled.Image`
  width: 100%;
  height: 380px;
  border-radius: 15px;
`;
export const DetailsDescription = styled.Text`
  margin-top: 20px;
  font-size: 18px;
`;
export const DetailsFooter = styled.View`
  position: absolute;
  align-items: center;
  bottom: 20px;
  left: 10px;
  right: 10px;
`;
export const DetailsContent = styled.View`
  justify-content: space-between;
  width: 95%;
  flex-direction: row;
`;
export const DetailsTotalAndValue = styled.View``;
export const DetailsTotal = styled.Text`
  font-weight: 600;
`;
export const DetailsValue = styled.Text`
  font-weight: 600;
`;
export const DetailsUpAndDown = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const DetailsButtonDown = styled.TouchableOpacity`
  background-color: #fd7f20;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
export const DetailsButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
export const DetailsAmount = styled.Text`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 600;
`;
export const DetailsButtonUp = styled.TouchableOpacity`
  background-color: #fd7f20;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
export const DetailsAreaButton = styled.View`
  background-color: #fd7f20;
  border-radius: 15px;
  margin-bottom: 15px;
  margin-top: 20px;
  width: 95%;
`;
export const DetailsAddCart = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
`;
export const DetailsAddCartText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;
