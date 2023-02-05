import styled, { css } from "styled-components/native";

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 0;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `};
`;
export const Text = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.sora500};
  color: ${({ theme }) => theme.colors.white};
`;
