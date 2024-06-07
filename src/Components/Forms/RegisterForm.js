import React, { useState } from "react";
import { View, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import LoginForm from "../Forms/LoginForm";

export default function RegisterForm({ navigation, onRegister,toggleModal }) {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleInputChange = (text) => {
    setUsername(text);
    setError(false); // Reset the error state
  };

  const handleRegister = () => {
    if (username && password && confirmPassword && password === confirmPassword) {
      onRegister({ username, password });
      Alert.alert("Registration Successful", "You are now registered");
    } else {
      setError(true);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, padding: 20 }}
    >
      <View style={{ flex: 1 }}>
        <Text variant="displayLarge">APP</Text>
        <Text variant="displaySmall">Register</Text>
        <TextInput
          mode="flat"
          placeholder="Username"
          label="Username"
          style={{ marginTop: 10 }}
          value={username}
          onChangeText={(text) => setUsername(text)}
          error={error}
        />
        <TextInput
          mode="flat"
          placeholder="Password"
          label="Password"
          secureTextEntry={showPass}
          value={password}
          onChangeText={(text) => setPassword(text)}
          right={
            <TextInput.Icon
              icon={!showPass ? "eye" : "eye-off"}
              onPress={() => setShowPass(!showPass)}
            />
          }
          style={{ marginTop: 10 }}
        />
        <TextInput
          mode="flat"
          placeholder="Confirm Password"
          label="Confirm Password"
          secureTextEntry={showConfirmPass} // Use a separate state
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={{ marginTop: 10 }}
        />
        <Button
          icon="account-plus"
          mode="outlined"
          style={{ marginTop: 5 }}
          onPress={handleRegister}
        >
          Register
        </Button>
        <Button
                  onPress={toggleModal}
                  icon="arrow-left"
                  mode="contained"
                  style={{ marginTop: 10 }}
                >
                  Go Back
                </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
