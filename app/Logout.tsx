import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppContext } from "@/hooks/useContextHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialUserValues } from "@/interfaces/user/IUser";

const Logout = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const {
    setLoggedInUser,
    isUserAuthenticated,
    setIsUserAuthenticated,
    setIsAuthenticatedAdminUser,
    setIsSessionExpired,
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

      setLoggedInUser(initialUserValues);
      setIsUserAuthenticated(false);
      setIsSessionExpired(true);
      setIsAuthenticatedAdminUser(false);
      handlingModalClose();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (isUserAuthenticated) {
    return (
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          You have logged in successfully
        </Text>
        <TouchableOpacity onPress={handleLogout} style={{ marginTop: 10 }}>
          <Text style={{ color: "red" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <Text>Logout page</Text>
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

export default Logout;
