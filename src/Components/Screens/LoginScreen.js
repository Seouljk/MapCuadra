import { View } from "react-native";
import React from "react";
import LoginForm from "../Forms/LoginForm";

export default function LoginScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <LoginForm {...props} />
    </View>
  );
}
