import React from "react";

import { Props } from "./interfaces";
import { Container } from "./styles";

export default function Toolbar({ children }: Props) {
  return <Container>{children}</Container>;
}
