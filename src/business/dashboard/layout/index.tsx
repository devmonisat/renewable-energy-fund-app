import React from "react";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView, Container, Title } from "./styles";

export default function Layout() {
  return (
    <SafeAreaView>
      <Container>
        <StatusBar style="auto" />
        <Title>Dashboard</Title>
      </Container>
    </SafeAreaView>
  );
}
