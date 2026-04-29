import { globalColors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import {
  useColorScheme,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomIcon from "./CustomIcon";
import { IRoute, TAB_ITEMS } from "@/constants/TabBar";

export function CustomTabBar({
  state,
  navigation,
  isAuthenticated,
  onCenterPress,
}: {
  state: { routes: IRoute[]; index: number };
  navigation: any;
  isAuthenticated: boolean;
  onCenterPress: () => void;
}) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[
        styles.tabBarContainer,
        {
          backgroundColor: globalColors.primary,
          borderColor: "transparent",
          borderWidth: 1,
          shadowColor: colors.background,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.85,
          shadowRadius: 4,
          elevation: 1,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { icon, name } = TAB_ITEMS[index];

        const onPress = () => {
          if (name === "center") {
            // Open modal or perform action for center button
            onCenterPress();
          } else {
            if (!isFocused) navigation.navigate(route.name);
          }
        };

        // Set styles for the center button
        const isCenter = name === "center";

        const centerIcon = (
          <CustomIcon iconName="home" iconSize={32} iconColor="#fff" />
        );

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={[
              styles.tabItem,
              isFocused && {
                backgroundColor: "#000000",
                shadowColor: colors.tint,
                shadowOpacity: 0.24,
                shadowRadius: 4,
                elevation: 4,
                transform: [{ scale: 1.061 }],
              },
              isCenter && styles.centerButton, // Center button styles
            ]}
          >
            {isCenter ? (
              centerIcon
            ) : isFocused ? ( // No icon for center button
              <CustomIcon
                iconName={icon as keyof (typeof FontAwesome)["glyphMap"]}
                iconSize={isAuthenticated ? 22 : 18}
                iconColor="#fff"
              />
            ) : (
              <CustomIcon
                iconName={icon as keyof (typeof FontAwesome)["glyphMap"]}
                iconSize={isAuthenticated ? 24 : 20}
                iconColor={isAuthenticated ? colors.text : colors.text + "cc"}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: "#fff",
  },
  tabItem: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    transitionDuration: "200ms",
  },
  tabLabel: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  centerButton: {
    backgroundColor: "#ff6347", // special color for center button
    borderRadius: 35,
    marginHorizontal: 8,
    shadowColor: "#ff6347",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
});
