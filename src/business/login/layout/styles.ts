import styled, { css } from "styled-components/native";

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
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const BoxButton = styled.View`
  background: ${({ theme }) => theme.colors.purple.base};
  margin-horizontal: ${({ theme }) => theme.wrapper.horizontal};
  border-radius: ${({ theme }) => theme.radius};
  margin-top: 17px;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const SignUpHereButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 13px;
`;
export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const LabelButton = styled.Text`
  color: ${({ theme }) => theme.colors.gray.base};
`;
export const Underline = styled.Text`
  color: ${({ theme }) => theme.colors.gray.base};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.gray.base};
`;
