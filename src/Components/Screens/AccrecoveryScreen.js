import { View } from "react-native";
import React from "react";
import AccrecoveryForm from "../Forms/AccrecoveryForm";

export default function AccrecoveryScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <AccrecoveryForm {...props} />
    </View>
  );
}
