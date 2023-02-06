import React from "react";

import Layout from "./layout";

export default function SignUP({ navigation }: any) {
  function onSubmit(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    //send data to endpoint
    console.log(data);

    navigation.navigate("PrivateStack", { screen: "Dashboard" });
  }
  function onLogin() {
    navigation.goBack();
  }

  return <Layout onSubmit={onSubmit} onLogin={onLogin} />;
}
