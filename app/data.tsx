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
import SixthGrade from "@/views/sixthGrade";
import SeventhGrade from "@/views/seventhGrade";
import EighthGrade from "@/views/eighthGrade";
import NinthGrade from "@/views/ninethGrade";
import TenthGrade from "@/views/tenthGrade";
import EleventhGrade from "@/views/eleventhGrade";
import Twelfth from "@/views/Twelfth";

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
      case "6°":
        return <SixthGrade />;
      case "7°":
        return <SeventhGrade />;
      case "8°":
        return <EighthGrade />;
      case "9°":
        return <NinthGrade />;
      case "10°":
        return <TenthGrade />;
      case "11°":
        return <EleventhGrade />;
      case "12°":
        return <Twelfth />;
      default:
        return <View />;
    }
  };

  return <View style={styles.container}>{renderingGrade()}</View>;
};

export default Data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
