import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/fireConfig";
import Navbar from "@/components/navbar/Navbar";

export default function TabTwoScreen() {
  const links = [
    { id: 4, url: "/first", text: "1°" },
    { id: 5, url: "/second", text: "2°" },
    { id: 6, url: "/third", text: "3°" },
    { id: 7, url: "/fourth", text: "4°" },
    { id: 8, url: "/fifth", text: "5°" },
  ];

  // const fetchUsers = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "users-data"));
  //     const usersData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setData(usersData);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  return (
    <View style={styles.container}>
      <Navbar links={links} />
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
