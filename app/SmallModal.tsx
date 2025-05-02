import CustomView from "@/components/customs/CustomView";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

const SmallModal = ({ height = screenHeight * 0.85 }) => {
  return (
    <CustomView style={[styles.container, { height }]}>
      <View style={styles.handle} />
      <Text style={styles.title}>Small Modal</Text>
      <Text>Content goes here</Text>
    </CustomView>
  );
};

export default SmallModal;

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
