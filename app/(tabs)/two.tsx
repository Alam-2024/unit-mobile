import { StyleSheet, Text } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import Navbar from "@/components/navbar/Navbar";
import CustomView from "@/components/customs/CustomView";

export default function TabTwoScreen() {
  const links = [
    { id: 4, url: "/first", text: "1°" },
    { id: 5, url: "/second", text: "2°" },
    { id: 6, url: "/third", text: "3°" },
    { id: 7, url: "/fourth", text: "4°" },
    { id: 8, url: "/fifth", text: "5°" },
  ];

  return (
    <CustomView>
      <Navbar links={links} />
      <Text style={styles.title}>Tab Two</Text>
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </CustomView>
  );
}

const styles = StyleSheet.create({
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
