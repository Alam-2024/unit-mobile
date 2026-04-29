import { View } from "react-native";
import React from "react";
import { useAppContext } from "@/hooks/useContextHook";
import CustomButton from "@/components/customs/CustomButton";
import CustomText from "@/components/customs/CustomText";

const Logout = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const { signOut } = useAppContext();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      onCloseModal?.();
    }
  };

  return (
    <View>
      <CustomText value="Are you sure you want to logout?" center bold medium />
      <CustomButton
        onPress={handleLogout}
        style={{
          backgroundColor: "#ff0000",
          padding: 10,
          borderRadius: 12,
          marginTop: 10,
        }}
        shadowColor="#3d3d3d"
        shadowWidth={1}
        shadowHeight={2}
        shadowOpacity={0.25}
        shadowRadius={3.84}
      >
        <CustomText value="Logout" center bold color="white" big />
      </CustomButton>
    </View>
  );
};

export default Logout;
