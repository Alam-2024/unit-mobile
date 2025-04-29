import { View, Text } from "react-native";
import React from "react";
import SwimmingUnitSecondGrade from "@/data/Swimming/SwimmingSecond";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";

const SecondGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  const units: { [key: string]: IUnits } = {
    InvasionGames: SwimmingUnitSecondGrade,
    Dodgeball: SwimmingUnitSecondGrade,
    OutdoorActivities: SwimmingUnitSecondGrade,
    Gymnastics: SwimmingUnitSecondGrade,
    Athletics: SwimmingUnitSecondGrade,
    CircuitTraining: SwimmingUnitSecondGrade,
    Swimming: SwimmingUnitSecondGrade,
    NetWallFundamentals: SwimmingUnitSecondGrade,
    Basketball: SwimmingUnitSecondGrade,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
};

export default SecondGrade;
