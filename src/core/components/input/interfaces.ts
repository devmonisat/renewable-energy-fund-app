import { ReactElement } from "react";

export interface Props {
  onBlur?: () => void;
  onChangeText?: (event: any) => void;
  value?: string;
  type?: string;
  placeholder?: string;
  primary?: boolean;
  secureTextEntry?: boolean;
  error?: boolean;
  icon?: ReactElement;
  autoFocus?: boolean;
  label?: string;
}
