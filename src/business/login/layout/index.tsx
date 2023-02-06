import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  SafeAreaView,
  Container,
  Content,
  Title,
  BoxButton,
  LabelButton,
  SignUpHereButton,
  Underline,
  Button,
} from "./styles";
import Toolbar from "core/molecules/toolbar";
import EyesOpen from "assets/icons/eyes-open.svg";

import Input from "core/components/input";
import DefaultButton from "core/components/button";

import { Controller, useForm } from "react-hook-form";

export default function Layout({
  onSubmit,
  onSignUP,
}: {
  onSubmit: (data: { email: string; password: string }) => void;
  onSignUP: () => void;
}) {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <SafeAreaView>
      <Container>
        <StatusBar style="auto" />
        <KeyboardAwareScrollView>
          <Toolbar />
          <Content>
            <Title>Login</Title>
          </Content>

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^\S+@\S+$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="E-mail"
                primary
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="ex: joe@joe.com"
                error={!!errors.email}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 8,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                primary
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Minimum 8 characters"
                error={!!errors.password}
                secureTextEntry={showPassword}
                icon={
                  <Button onPress={() => setShowPassword(!showPassword)}>
                    <EyesOpen height={18} />
                  </Button>
                }
              />
            )}
            name="password"
          />

          <BoxButton disabled={!!Object.keys(errors).length}>
            <DefaultButton
              label="Login"
              disabled={!!Object.keys(errors).length}
              onPress={handleSubmit(onSubmit)}
            />
          </BoxButton>

          <SignUpHereButton onPress={onSignUP}>
            <LabelButton>
              Don’t have an account? <Underline>Sign up </Underline>here
            </LabelButton>
          </SignUpHereButton>
        </KeyboardAwareScrollView>
      </Container>
    </SafeAreaView>
  );
}
