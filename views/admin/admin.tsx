import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "@/components/customs/CustomButton";

const Admin = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const handlingModalClose = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };
  return (
    <View>
      <Text>Admin view</Text>
      <CustomButton
        onPress={handlingModalClose}
        style={{
          padding: 10,
          backgroundColor: "lightgray",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text>Close this page</Text>
      </CustomButton>
    </View>
  );
};

export default Admin;
