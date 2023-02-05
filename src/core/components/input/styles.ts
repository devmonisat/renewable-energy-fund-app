import styled, { css } from "styled-components/native";
import { Props } from "./interfaces";

export const Container = styled.View`
  margin-horizontal: ${({ theme }) => theme.wrapper.horizontal};
  margin-bottom: 20px;
`;
export const Content = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;

  ${(props) =>
    props.primary &&
    css`
      border-radius: ${({ theme }) => theme.radius};
      border: 1px solid transparent;
      background: ${({ theme }) => theme.colors.gray.light};
      ${props.error &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.red.base};
      `}
    `};
`;

export const Field = styled.View<Props>`
  flex: 1;
  margin-bottom: 5px;
`;

export const Label = styled.Text`
  flex: 1;
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.sora500};
  color: ${({ theme }) => theme.colors.gray.base};
`;
export const TextInput = styled.TextInput`
  flex: 1;
  height: 48px;
  font-size: 16px;

  font-family: ${({ theme }) => theme.fonts.sora400};
  color: ${({ theme }) => theme.colors.black};
`;
