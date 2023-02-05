import React from "react";
import { Props } from "./interfaces";
import { TouchableOpacity, Text } from "./styles";

export default function Button({ label, onPress, disabled }: Props) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
