import React from "react";

import Layout from "./layout";

export default function Login({ navigation }: any) {
  function onSubmit(data: { email: string; password: string }) {
    //send data to endpoint
    console.log(data);

    navigation.navigate("PrivateStack", { screen: "Dashboard" });
  }

  function onSignUP() {
    navigation.navigate("SignUP");
  }

  return <Layout onSubmit={onSubmit} onSignUP={onSignUP} />;
}
