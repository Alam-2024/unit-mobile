import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Admin = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const handlingModalClose = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };
  return (
    <View>
      <Text>Admin view</Text>
      <TouchableOpacity
        onPress={handlingModalClose}
        style={{
          padding: 10,
          backgroundColor: "lightgray",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text>Close this page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Admin;
