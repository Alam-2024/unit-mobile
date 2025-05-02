import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalColors } from "@/constants/Colors";

type Props = {
  children: React.ReactNode;
  bgColor?: string;
  style?: object;
};

const CustomView = ({ children, bgColor, style }: Props) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: bgColor || globalColors.primary },
      ]}
      {...style}
    >
      {children}
    </View>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
