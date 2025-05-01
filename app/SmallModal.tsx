import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

const SmallModal = ({ height = screenHeight * 0.85 }) => {
  return (
    <View style={[styles.container, { height }]}>
      <View style={styles.handle} />
      <Text style={styles.title}>Small Modal</Text>
      <Text>Content goes here</Text>
    </View>
  );
};

export default SmallModal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
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
