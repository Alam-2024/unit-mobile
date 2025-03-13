import React from "react";
import { useAppContext } from "@/hooks/useContextHook";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const { setLoggedInUser, loggedInUser } = useAppContext();

  const handlingLoggedInUser = () => {
    setLoggedInUser(true);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={handlingLoggedInUser}
        style={{
          marginTop: 20,
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          borderColor: "black",
        }}
      >
        <Text>Go inside Mr.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
