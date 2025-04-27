import { View, Text, StyleSheet } from "react-native";
import React from "react";

type SeparatorProps = {
  width?: number | `${number}%`; // solo números o strings tipo '50%'
  height?: number;
  opacity?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Separator = ({
  width = "100%",
  height = StyleSheet.hairlineWidth,
  opacity = 1,
  marginTop = 10,
  marginBottom = 10,
}: SeparatorProps) => (
  <View
    style={{
      width,
      height,
      opacity,
      backgroundColor: "#e3e3e3",
      marginTop,
      marginBottom,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#e3e3e3",
      borderStyle: "solid",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}
  />
);

export default Separator;
