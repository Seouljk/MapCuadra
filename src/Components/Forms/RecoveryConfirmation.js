import React from "react";
import { Modal, View, Text, Button } from "react-native";

export default function RecoveryConfirmation({ visible, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "80%",
            height: 200,
            backgroundColor: "white",
            padding: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Recovery Confirmation
          </Text>
          <Text>Your recovery request has been submitted.</Text>
          <Button onPress={onClose} title="Close" />
        </View>
      </View>
    </Modal>
  );
}
