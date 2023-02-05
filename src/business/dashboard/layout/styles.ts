import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.sora600};
  font-size: 18px;
  padding: 20px;
  margin-bottom: 17px;
`;
