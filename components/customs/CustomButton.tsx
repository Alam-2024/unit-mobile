import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";

type Props = {
  id?: number;
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  shadowWidth?: number;
  shadowHeight?: number;
  shadowOpacity?: number;
  shadowRadius?: number;
  shadowColor?: string;
};

/**
 * A custom button component with an optional shadow effect.
 *
 * @param {{ id?: number; children: React.ReactNode; onPress: () => void; style?: StyleProp<ViewStyle>; shadowWidth?: number; shadowHeight?: number; shadowOpacity?: number; shadowRadius?: number; shadowColor?: string }} props
 *
 * @return {JSX.Element}
 */
const CustomButton = ({
  id,
  children,
  onPress,
  style,
  shadowColor,
  shadowWidth,
  shadowHeight,
  shadowOpacity,
  shadowRadius,
}: Props): JSX.Element => {
  const styles = customStyles(
    shadowWidth ?? 0,
    shadowHeight ?? 0,
    shadowOpacity ?? 0,
    shadowRadius ?? 0,
    shadowColor ?? "#000"
  );
  return (
    <TouchableOpacity
      key={id}
      onPress={onPress}
      style={[styles.itemsText, style]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;

const customStyles = (
  shadowWidth: number,
  shadowHeight: number,
  shadowOpacity: number,
  shadowRadius: number,
  shadowColor: string
) =>
  StyleSheet.create({
    itemsText: {
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderColor: "#e3e3e3",
      borderWidth: 1,
      backgroundColor: "#ffffff",
      borderStyle: "solid",
      shadowColor: shadowColor,
      shadowOffset: {
        width: shadowWidth,
        height: shadowHeight,
      },
      shadowOpacity: shadowOpacity,
      shadowRadius: shadowRadius,
      elevation: 5,
      borderRadius: 8,
      minWidth: 80,
      textAlign: "center",
      marginHorizontal: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });
