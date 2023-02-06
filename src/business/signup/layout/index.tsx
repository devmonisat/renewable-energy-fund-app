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
  Checkbox,
  Button,
  Strong,
  GoBack,
  Square,
  LoginButton,
  Underline,
} from "./styles";
import Toolbar from "core/molecules/toolbar";
import EyesOpen from "assets/icons/eyes-open.svg";
import ArrowBack from "assets/icons/arrow-back.svg";

import Input from "core/components/input";
import DefaultButton from "core/components/button";

import { Controller, useForm } from "react-hook-form";
import { NavigationContext } from "@react-navigation/native";

export default function Layout({
  onSubmit,
  onLogin,
}: {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => void;
  onLogin: () => void;
}) {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isSelected, setSelection] = useState(false);

  const navigation = React.useContext(NavigationContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: isSelected,
    },
  });
  return (
    <SafeAreaView>
      <Container>
        <StatusBar style="auto" />
        <KeyboardAwareScrollView>
          <Toolbar>
            <GoBack onPress={() => navigation?.goBack()}>
              <ArrowBack width={18} height={16} />
            </GoBack>
          </Toolbar>
          <Content>
            <Title>Create your account</Title>
          </Content>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="First Name"
                primary
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="ex: Joe"
                error={!!errors.firstName}
              />
            )}
            name="firstName"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Last Name"
                primary
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Smith"
                error={!!errors.lastName}
              />
            )}
            name="lastName"
          />

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

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <Checkbox
                onPress={() => {
                  setSelection(!isSelected);
                  onChange(!isSelected);
                }}
              >
                <Square isSelected={isSelected} error={!!errors.terms} />

                <LabelButton>
                  I am over 18 years of age and I have read and agree {`\n`} to
                  the <Strong>Terms of Service</Strong> and{" "}
                  <Strong>Privacy policy</Strong>.
                </LabelButton>
              </Checkbox>
            )}
            name="terms"
          />

          <BoxButton disabled={!!Object.keys(errors).length}>
            <DefaultButton
              label="Create account"
              disabled={!!Object.keys(errors).length}
              onPress={handleSubmit(onSubmit)}
            />
          </BoxButton>

          <LoginButton onPress={onLogin}>
            <LabelButton>
              Already have an account?{" "}
              <Strong>
                <Underline>Log in Here </Underline>
              </Strong>
            </LabelButton>
          </LoginButton>
        </KeyboardAwareScrollView>
      </Container>
    </SafeAreaView>
  );
}
