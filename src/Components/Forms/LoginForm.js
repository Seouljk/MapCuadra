import React, { useState } from "react";
import {
  View,
  Alert,
  Modal,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import RegisterForm from "../Forms/RegisterForm";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [registeredCredentials, setRegisteredCredentials] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

   const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [passwordErrorModalVisible, setPasswordErrorModalVisible] = useState(false);

  const toggleErrorModal = () => {
    setErrorModalVisible(!errorModalVisible);
    };

    const togglePasswordErrorModal = () => {
      setPasswordErrorModalVisible(!passwordErrorModalVisible);
    };


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRegister = (credentials) => {
    setRegisteredCredentials([...registeredCredentials, credentials]);
    toggleModal(); // Close the modal after registration
  };

  const handleLogin = () => {
    const user = registeredCredentials.find(
          (cred) => cred.username === username && cred.password === password
        );
    const isRegistered = registeredCredentials.some(
          (cred) => cred.username === username && cred.password === password
        );

 const handleForgotPassword = () => {
     // Navigate to the
     navigation.navigate("Recovery");
   };

if (user) {
      Alert.alert("Login Successful", "You are now logged in", [
        {
          text: "OK",
          onPress: () => {
            console.log("Login successful");
            navigation.navigate("HomePage");
          },
        },
      ]);
    } else if (registeredCredentials.some((cred) => cred.username === username)) {
      // Show password error modal
      setPasswordErrorModalVisible(true);
    } else {
      // Show general error modal
      setErrorModalVisible(true);
    }

  };

  return (
    <View style={{ flex: 1, padding: 20}}>
      <Text variant="displayLarge">APP</Text>
      <Text variant="displaySmall">Login</Text>
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
        secureTextEntry={!showPass}
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
      <Button
              onPress={() => navigation.navigate("Recovery")}
              style={{ marginTop: 10 }}
            >
              Forgot Password?
            </Button>
      <Button
        icon="login"
        mode="outlined"
        style={{ marginTop: 10 }}
        onPress={handleLogin}
      >
        Login
      </Button>
      <Button
        onPress={toggleModal}
        icon="account-plus"
        mode="outlined"
        style={{ marginTop: 10 }}
      >
        Register
      </Button>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Go Back
      </Button>
      <Modal
              animationType="slide"
              transparent={true}
              visible={errorModalVisible}
              onRequestClose={toggleErrorModal}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalGen}>
                  <Text style={{ fontSize: 18, marginBottom: 10, alignItems: "center" }}>No user exists</Text>
                  <Button onPress={toggleErrorModal} mode="contained">
                    OK
                  </Button>
                </View>
              </View>
            </Modal>

      {/* Modal for Registration Form */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.modalContainer}
              >
                <View style={styles.modalContent}>
                  <RegisterForm
                    navigation={navigation}
                    onRegister={handleRegister}
                    toggleModal={toggleModal}
                  />
                  <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            </Modal>
                  {/* Modal for "Password Incorrect" error */}
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={passwordErrorModalVisible}
                    onRequestClose={togglePasswordErrorModal}
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalGen}>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>Password Incorrect</Text>
                        <Button onPress={togglePasswordErrorModal} mode="contained">
                          OK
                        </Button>
                      </View>
                    </View>
                  </Modal>
          </View>
        );
      }

      const styles = StyleSheet.create({
        modalContainer: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        modalGen: {
        width: "50%",
        height: "15%",
        backgroundColor: "white",
        padding: 20,
        justifyContent: "center",
         },
        modalContent: {
          width: "90%",
          height: "90%",
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          alignItems: "center", // Center content horizontally
        },
        closeButton: {
          marginTop: -10,
          alignSelf: "flex-end",
        },
      });