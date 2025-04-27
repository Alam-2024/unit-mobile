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
}: Props) => {
  return (
    <Text
      style={[
        big ? { fontSize: 20 } : medium ? { fontSize: 16 } : { fontSize: 12 },
        center
          ? { textAlign: "center" }
          : right
          ? { textAlign: "right" }
          : { textAlign: "left" },
        bold ? { fontWeight: "bold" } : { fontWeight: "normal" },
        { color: color ? color : "#000" },
        {
          backgroundColor: bgColor ? bgColor : "#88b0c3",
          fontFamily: "Roboto",
        },
      ]}
    >
      {value}
    </Text>
  );
};
export default CustomText;
