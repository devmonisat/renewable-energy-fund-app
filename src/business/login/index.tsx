import React from "react";

import Layout from "./layout";

export default function Login({ navigation }: any) {
  function onSubmit(data: { email: string; password: string }) {
    //save data to endpoint
    console.log(data);

    navigation.navigate("PrivateStack", { screen: "Dashboard" });
  }

  return <Layout onSubmit={onSubmit} />;
}
