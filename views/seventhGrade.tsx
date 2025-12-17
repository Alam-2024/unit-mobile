import { View, Text } from "react-native";
import React from "react";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import flagFootballSixthSeventh from "@/data/Flag/FlagSixthAndSeventh";

export default function SeventhGrade() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the first grade
  const units: { [key: string]: IUnits } = {
    InvasionGames: SwimmingUnit1stGrade,
    BatAndBall: SwimmingUnit1stGrade,
    TargetGames: SwimmingUnit1stGrade,
    Gymnastics: SwimmingUnit1stGrade,
    FitnessFun: SwimmingUnit1stGrade,
    AttackingAndDefending: SwimmingUnit1stGrade,
    BasicTrackAndField: SwimmingUnit1stGrade,
    DancePlants: SwimmingUnit1stGrade,
    Swimming: SwimmingUnit1stGrade,
    FlagFootBall: flagFootballSixthSeventh,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
}
