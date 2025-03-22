import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useAppContext } from "@/hooks/useContextHook";
import Navbar from "@/components/navbar/Navbar";
import { router } from "expo-router";

export default function TabOneScreen() {
  const { setLoggedInUser, loggedInUser } = useAppContext();
  const links = [
    { id: 1, url: "/pk-third", text: "PK-3" },
    { id: 2, url: "/pk-fourth", text: "PK-4" },
    { id: 3, url: "/kg-ab", text: "KG" },
  ];

  const openDataModal = () => {
    console.log("openDataModal");
  };

  return (
    <View style={styles.container}>
      <Navbar links={links} />
      <Text style={styles.title} onPress={() => {}}>
        Tab One
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
