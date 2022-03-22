import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin-top: 15px;
  flex-direction: row;
`;
export const CategoryButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 15px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  /* border: 2px solid #fd7f20; */
`;

export const CategoryView = styled.View`
  padding: 8px;
`;

export const CategoryImageButton = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 15px;
`;
