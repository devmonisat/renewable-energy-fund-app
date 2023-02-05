import styled from "styled-components/native";

import Constants from "expo-constants";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  height: ${95 - Constants.statusBarHeight}px;
  border-bottom-color: ${({ theme }) => theme.colors.gray.light};
  border-bottom-width: 1px;
`;
