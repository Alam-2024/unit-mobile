import { View } from "react-native";
import React from "react";
import { useAppContext } from "@/hooks/useContextHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "@/components/customs/CustomButton";
import CustomText from "@/components/customs/CustomText";
import { initialUserState } from "@/interfaces/constants/initialUserValues";

const Logout = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const {
    setLoggedInUser,
    setIsUserAuthenticated,
    setIsAuthenticatedAdminUser,
  } = useAppContext();
  const handlingModalClose = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("loginTime");

      setLoggedInUser(initialUserState);
      setIsUserAuthenticated(false);
      setIsAuthenticatedAdminUser(false);
      handlingModalClose();
    } catch (error) {
      console.error("Error logging out:", error);
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
