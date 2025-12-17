import { Text } from "react-native";
import React from "react";

type Props = {
  value: string;
  big?: boolean;
  medium?: boolean;
  center?: boolean;
  right?: boolean;
  bold?: boolean;
  color?: string;
  bgColor?: string;
  fSize?: number;
  style?: any;
};

const CustomText = ({
  value,
  big,
  medium,
  center,
  right,
  bold,
  color,
  bgColor,
  fSize,
  style,
}: Props) => {
  return (
    <Text
      style={[
        big
          ? { fontSize: 20 }
          : medium
          ? { fontSize: 16 }
          : { fontSize: fSize || 14 },
        center
          ? { textAlign: "center" }
          : right
          ? { textAlign: "right" }
          : { textAlign: "left" },
        bold ? { fontWeight: "bold" } : { fontWeight: "normal" },
        { color: color ? color : "#000" },
        {
          backgroundColor: bgColor ? bgColor : "transparent",
          fontFamily: "Roboto",
        },
      ]}
      {...style}
    >
      {value}
    </Text>
  );
};
export default CustomText;
