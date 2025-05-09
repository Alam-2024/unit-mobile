import CustomView from "@/components/customs/CustomView";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

const SmallModal = ({ height = screenHeight * 0.85 }) => {
  return (
    <CustomView style={styles.container}>
      <View style={styles.handle} />
      <Text style={styles.title}>Small Modal</Text>
      <Text>Content goes here</Text>
    </CustomView>
  );
};

export default SmallModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    padding: 20,
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#167481",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
