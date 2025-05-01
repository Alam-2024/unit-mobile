import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Pressable } from "react-native";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs, useRouter } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useAppContext } from "@/hooks/useContextHook";
import DynamicModal from "../modal";
import Login from "../Login";
import CustomIcon from "@/components/customs/CustomIcon";
import Admin from "@/views/admin/admin";
import Logout from "../Logout";
import { FontAwesome } from "@expo/vector-icons";

interface Route {
  key: string;
  name: string;
  params?: Record<string, any>;
}

interface TabItems {
  name: string;
  label: string;
  icon: string;
}
const TAB_ITEMS: TabItems[] = [
  { name: "index", label: "Early Learning", icon: "odnoklassniki" },
  { name: "two", label: "Elementary", icon: "weibo" },
  { name: "center", label: "Center", icon: "home" },
  { name: "third", label: "Middle School", icon: "graduation-cap" },
  { name: "profile", label: "Profile", icon: "user" },
];

function CustomTabBar({
  state,
  navigation,
  isUserAuthenticated,
  onCenterPress,
}: {
  state: { routes: Route[]; index: number };
  navigation: any;
  isUserAuthenticated: boolean;
  onCenterPress: () => void;
}) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[
        styles.tabBarContainer,
        { backgroundColor: colors.background + "ee" },
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
                iconSize={isUserAuthenticated ? 22 : 18}
                iconColor="#fff"
              />
            ) : (
              <CustomIcon
                iconName={icon as keyof (typeof FontAwesome)["glyphMap"]}
                iconSize={isUserAuthenticated ? 24 : 20}
                iconColor={
                  isUserAuthenticated ? colors.text : colors.text + "cc"
                }
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  const { isUserAuthenticated, isAuthenticatedAdminUser } = useAppContext();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  // Modal control global para todo el layout
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<
    "login" | "admin" | "logout" | null
  >(null);

  const openModal = (type: "login" | "admin" | "logout") => {
    setModalType(type);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setModalType(null);
  };

  const handleCenterButtonPress = () => {
    router.push("/SmallModal");
  };

  const adminView = () => {
    if (isAuthenticatedAdminUser) {
      return (
        <TouchableOpacity
          onPress={() => openModal("admin")}
          style={{ marginLeft: 15 }}
        >
          <CustomIcon
            iconName="user-secret"
            iconSize={34}
            iconColor={colors.text}
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <>
      <DynamicModal visible={isModalVisible} onClose={closeModal}>
        {modalType === "login" && <Login onCloseModal={closeModal} />}
        {modalType === "admin" && <Admin onCloseModal={closeModal} />}
        {modalType === "logout" && <Logout onCloseModal={closeModal} />}
      </DynamicModal>

      <Tabs
        screenOptions={{
          headerShown: useClientOnlyValue(false, true),
          tabBarStyle: { display: "none" }, // Hide default tab bar
          headerStyle: {
            backgroundColor: colors.background + "ee",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          },
          headerTintColor: colors.text,
        }}
        tabBar={(props) => (
          <CustomTabBar
            {...props}
            isUserAuthenticated={isUserAuthenticated}
            onCenterPress={handleCenterButtonPress}
          />
        )}
      >
        <Tabs.Screen
          name={TAB_ITEMS[0].name}
          options={{
            title: `${TAB_ITEMS[0].label}`,
            tabBarShowLabel: false,
            headerRight: () => (
              <Pressable
                onPress={() => {
                  if (!isUserAuthenticated) openModal("login");
                  else openModal("logout");
                }}
                style={({ pressed }) => ({
                  marginRight: 20,
                  opacity: pressed ? 0.6 : 1,
                })}
              >
                <CustomIcon
                  iconName={!isUserAuthenticated ? "user-circle-o" : "sign-out"}
                  iconSize={30}
                  iconColor={colors.text}
                />
              </Pressable>
            ),
            headerLeft: () => adminView(),
            tabBarIcon: ({ color }) => (
              <CustomIcon
                iconName={
                  TAB_ITEMS[0].icon as keyof (typeof FontAwesome)["glyphMap"]
                }
                iconColor={color}
                iconSize={28}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={TAB_ITEMS[1].name}
          options={{
            title: `${TAB_ITEMS[1].label}`,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <CustomIcon
                iconName={
                  TAB_ITEMS[1].icon as keyof (typeof FontAwesome)["glyphMap"]
                }
                iconColor={color}
                iconSize={30}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={TAB_ITEMS[2].name}
          options={{
            title: `${TAB_ITEMS[2].label}`,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <CustomIcon
                iconName={
                  TAB_ITEMS[2].icon as keyof (typeof FontAwesome)["glyphMap"]
                }
                iconColor={color}
                iconSize={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={TAB_ITEMS[3].name}
          options={{
            title: `${TAB_ITEMS[3].label}`,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <CustomIcon
                iconName={
                  TAB_ITEMS[3].icon as keyof (typeof FontAwesome)["glyphMap"]
                }
                iconColor={isUserAuthenticated ? color : colors.text + "cc"}
                iconSize={28}
              />
            ),
          }}
        />
      </Tabs>
    </>
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
    // flexDirection: "row",
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
