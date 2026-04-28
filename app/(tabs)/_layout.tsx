import React, { useState } from "react";
import { TouchableOpacity, Pressable } from "react-native";
import { Tabs, useRouter } from "expo-router";

import Colors, { globalColors } from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useAppContext } from "@/hooks/useContextHook";
import DynamicModal from "../modal";
import Login from "../Login";
import CustomIcon from "@/components/customs/CustomIcon";
import Logout from "../Logout";
import { FontAwesome } from "@expo/vector-icons";
import { CustomTabBar } from "@/components/customs/CustomTabBar";
import { TAB_ITEMS } from "@/constants/TabBar";

export default function TabLayout() {
  const { isUserAuthenticated, isAuthenticatedAdminUser } = useAppContext();
  console.log(
    "🚀 ~ TabLayout ~ isAuthenticatedAdminUser:",
    isAuthenticatedAdminUser,
  );
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  // Modal control global para todo el layout
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"login" | "logout" | null>(null);

  const openModal = (type: "login" | "logout") => {
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
          onPress={() => router.push("/adminModal")}
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
        {modalType === "logout" && <Logout onCloseModal={closeModal} />}
      </DynamicModal>

      <Tabs
        screenOptions={{
          headerShown: useClientOnlyValue(false, true),
          tabBarStyle: { display: "none" }, // Hide default tab bar
          headerStyle: {
            backgroundColor: globalColors.primary,
          },
          headerTintColor: colors.text,
          headerTitleAlign: "center",
        }}
        tabBar={(props) => (
          <CustomTabBar
            {...props}
            isUserAuthenticated={isUserAuthenticated}
            onCenterPress={handleCenterButtonPress}
          />
        )}
      >
        {TAB_ITEMS.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.label,
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
                    iconName={
                      !isUserAuthenticated ? "user-circle-o" : "sign-out"
                    }
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
        ))}
      </Tabs>
    </>
  );
}
