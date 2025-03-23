import { View, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import FirstGrade from "@/views/firstGrade";
import SecondGrade from "@/views/secondGrade";
import PkThreeGrade from "@/views/pkThreeGrade";
import PkFourthGrade from "@/views/pkFourthGrade";
import KgGrade from "@/views/kgGrade";
import ThirdGrade from "@/views/thirdGrade";
import FourthGrade from "@/views/fourthGrade";
import FifthGrade from "@/views/fifthGrade";

const Data = () => {
  const params = useLocalSearchParams();
  const renderingGrade = () => {
    switch (params.grade) {
      case "PK-3":
        return <PkThreeGrade />;
      case "PK-4":
        return <PkFourthGrade />;
      case "KG":
        return <KgGrade />;
      case "1°":
        return <FirstGrade />;
      case "2°":
        return <SecondGrade />;
      case "3°":
        return <ThirdGrade />;
      case "4°":
        return <FourthGrade />;
      case "5°":
        return <FifthGrade />;
    }
  };

  return <View style={styles.container}>{renderingGrade()}</View>;
};

export default Data;

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
