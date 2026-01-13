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
  borderColor?: string;
  disabled?: boolean;
};

/**
 * A custom button component with an optional shadow effect.
 *
 * @param {{ id?: number; children: React.ReactNode; onPress: () => void; style?: StyleProp<ViewStyle>; shadowWidth?: number; shadowHeight?: number; shadowOpacity?: number; shadowRadius?: number; shadowColor?: string; borderColor?: string; disabled?: boolean }} props
 *
 * @return {JSX.Element}
 */
const CustomButton = ({
  id,
  children,
  onPress,
  style: customButtonStyle,
  shadowWidth: shadowWidth = 0,
  shadowHeight: shadowHeight = 0,
  shadowOpacity: shadowOpacity = 0,
  shadowRadius: shadowRadius = 0,
  shadowColor: shadowColor = "#000",
  borderColor: borderColor = "#e3e3e3",
  disabled: disabled = false,
}: Props) => {
  const buttonStyles = customStyles(
    shadowWidth,
    shadowHeight,
    shadowOpacity,
    shadowRadius,
    shadowColor,
    borderColor
  );
  return (
    <TouchableOpacity
      key={id}
      onPress={onPress}
      style={[buttonStyles.itemsText, customButtonStyle]}
      disabled={disabled}
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
  shadowColor: string,
  borderColor: string
) =>
  StyleSheet.create({
    itemsText: {
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderWidth: 1,
      backgroundColor: "#ffffff",
      borderStyle: "solid",
      shadowColor: shadowColor,
      borderColor: borderColor,
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
