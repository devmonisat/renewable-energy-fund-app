import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView, Container } from "./styles";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Layout() {
  return (
    <SafeAreaView>
      <Container>
        <StatusBar style="auto" />

        <KeyboardAwareScrollView>
          <Text>Login</Text>
        </KeyboardAwareScrollView>
      </Container>
    </SafeAreaView>
  );
}
