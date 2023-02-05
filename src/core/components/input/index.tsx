import React from "react";
import { Props } from "./interfaces";
import { Container, Content, TextInput, Label, Field } from "./styles";

export default function Input({
  onBlur,
  onChangeText,
  value,
  primary,
  placeholder,
  secureTextEntry,
  error,
  type,
  autoFocus,
  icon,
  label,
}: Props) {
  return (
    <Container>
      <Field>
        <Label>{label}</Label>
      </Field>
      <Content primary={primary} error={error} type={type}>
        <TextInput
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          keyboardType={"default"}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
        {icon && icon}
      </Content>
    </Container>
  );
}
