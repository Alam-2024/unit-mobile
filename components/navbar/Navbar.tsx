import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";

type NavbarProps = {
  id: number;
  url: string;
  text: string;
};

const Navbar = ({ links }: { links: NavbarProps[] }) => {
  if (!links) {
    return null;
  }
  return (
    <View style={styles.container}>
      {links.map((link) => (
        <TouchableOpacity
          key={link.id}
          onPress={() =>
            router.push({
              pathname: "/data",
              params: { grade: link.text },
            })
          }
          style={styles.itemsText}
        >
          <Text style={styles.itemText}>{link.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minWidth: 350,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
    flexWrap: "wrap",
  },
  itemsText: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    minWidth: 80,
    textAlign: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
