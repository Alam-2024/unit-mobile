import { StyleSheet } from "react-native";

import Navbar from "@/components/navbar/Navbar";
import CustomView from "@/components/customs/CustomView";
import CustomText from "@/components/customs/CustomText";

export default function TabOneScreen() {
  const links = [
    { id: 1, url: "/pk-third", text: "PK-3" },
    { id: 2, url: "/pk-fourth", text: "PK-4" },
    { id: 3, url: "/kg-ab", text: "KG" },
  ];

  return (
    <CustomView>
      <Navbar links={links} />
      <CustomText style={styles.title} value="Tab One" big />
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
