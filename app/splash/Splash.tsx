import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CustomText from "@/components/customs/CustomText";

const Splash = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="book-open-page-variant"
        size={160}
        color="#fff"
      />
      <CustomText value="Welcome to the App" big center />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#88b0c3",
  },
});
