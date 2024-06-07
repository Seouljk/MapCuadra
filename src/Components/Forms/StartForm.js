import { View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";

export default function StartForm({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style= {{ fontSize: 65 , color: 'black', marginBottom: 5}}>
        App
        </Text>
        <Text style= {{ fontSize: 10 , color: 'black' , marginBottom: 50}}>
        by Cuadra, John Kyle
        </Text>

        <Button
             onPress={() => navigation.navigate("Login")} // Removed incorrect type annotation
             icon="login"
             mode="outlined"
             style={{ marginTop: 10 }}
        >
          Start
        </Button>
    </View>
  );
}
