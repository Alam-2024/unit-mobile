import { View, Text } from "react-native";
import React from "react";

type Props = {
  value: string;
  big?: boolean;
  center?: boolean;
  bold?: boolean;
  color?: string;
};

const CustomText = ({ value, big, center, bold, color }: Props) => {
  return (
    <Text
      style={[
        big ? { fontSize: 20 } : { fontSize: 16 },
        center ? { textAlign: "center" } : { textAlign: "left" },
        bold ? { fontWeight: "bold" } : { fontWeight: "normal" },
        { color: color ? color : "#000" },
      ]}
    >
      {value}
    </Text>
  );
};
export default CustomText;
