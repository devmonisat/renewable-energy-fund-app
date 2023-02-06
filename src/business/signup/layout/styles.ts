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
  margin-top: 48px;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const Checkbox = styled.TouchableOpacity`
  margin-top: 13px;
  margin-horizontal: ${({ theme }) => theme.wrapper.horizontal};
  flex-direction: row;
`;
export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const LabelButton = styled.Text`
  color: ${({ theme }) => theme.colors.gray.base};
  overflow-wrap: break-word;
`;
export const Strong = styled.Text`
  color: ${({ theme }) => theme.colors.black};
`;
export const GoBack = styled.TouchableOpacity`
  color: ${({ theme }) => theme.colors.black};
  margin-horizontal: ${({ theme }) => theme.wrapper.horizontal};
`;
export const Square = styled.View`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray.base};

  ${({ error }: { error: boolean }) =>
    error &&
    css`
      border-radius: 2px;
      border: 2px solid ${({ theme }) => theme.colors.red.base};
      background: ${({ theme }) => theme.colors.white};
    `};

  ${({ isSelected }: { isSelected: boolean }) =>
    isSelected &&
    css`
      border-radius: 2px;
      border: 2px solid ${({ theme }) => theme.colors.purple.base};
      background: ${({ theme }) => theme.colors.purple.base};
    `};
`;

export const Underline = styled.Text`
  color: ${({ theme }) => theme.colors.gray.base};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.gray.base};
`;

export const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 13px;
`;
