import { FontAwesome } from "@expo/vector-icons";

const CustomIcon = ({
  iconName,
  iconColor,
  iconSize,
  ...props
}: {
  iconName: React.ComponentProps<typeof FontAwesome>["name"];
  iconColor: string;
  iconSize?: number;
  [key: string]: any;
}) => (
  <FontAwesome
    name={iconName}
    color={iconColor}
    size={iconSize || 30}
    {...props}
  />
);

export default CustomIcon;
