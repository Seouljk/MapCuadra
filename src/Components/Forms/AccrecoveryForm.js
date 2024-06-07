
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { View, Modal } from "react-native";
import RecoveryConfirmation from "../Forms/RecoveryConfirmation";

export default function AccrecoveryForm({ navigation }) {
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(
    false
  );
  const [username, setUsername] = useState("");

  const showConfirmationModal = () => {
    // Perform any necessary validation for the username here
    if (username.trim() === "") {
      // Display an error message or alert if the username is empty
      return;
    }

    setConfirmationModalVisible(true);
  };

  const hideConfirmationModal = () => {
    setConfirmationModalVisible(false);
  };

  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Recover Your Account
        </Text>
        {/* Prompt for the username */}
        <TextInput
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 20,
            width: 200,
            padding: 10,
          }}
        />

        <CustomButton
          title="Send Recovery Email"
          onPress={showConfirmationModal}
          icon="mail"
          mode="outlined"
          label="Send Email"  // Adding a label prop for the icon
          style={{ marginTop: 10 }}
        />

        {/* Back button to navigate back to login page */}
        <CustomButton
          title="Back to Login"
          onPress={() => navigation.navigate("Login")}
          icon="arrow-left"
          mode="contained"
          label="Back to Login"  // Adding a label prop for the icon
          style={{ marginTop: 20 }}
        />

        {/* Recovery Confirmation Modal */}
        <RecoveryConfirmation
          visible={confirmationModalVisible}
          onClose={() => {
            hideConfirmationModal();
            navigation.navigate("Login");
          }}
        />
      </View>
    );
  }

  // Modified CustomButton component to include labels for icons
  function CustomButton({ title, onPress, icon, mode, label, style }) {
    return (
      <Button
        title={title}
        onPress={onPress}
        icon={icon}
        mode={mode}
        style={style}
      >
        {/* Display label next to the icon */}
        <Text>{label}</Text>
      </Button>
    );
  }