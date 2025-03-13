import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useAppContext } from "@/hooks/useContextHook";

export default function TabOneScreen() {
  const { setLoggedInUser, loggedInUser } = useAppContext();

  const handlingLoggedInUser = () => {
    setLoggedInUser(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <TouchableOpacity>
        <Text onPress={handlingLoggedInUser}>Logout</Text>
        <Text>{loggedInUser ? "true" : "false"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
