import CustomMiddleContent from "@/components/customs/CustomMiddleContent";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import CustomMiddleContainer from "@/components/views/CustomMiddleContainer";
import flagFootballSixthSeventh from "@/data/Flag/FlagSixthAndSeventh";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import React from "react";
import { View, Text } from "react-native";

const SixthGrade = () => {
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
    <CustomMiddleContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
};

export default SixthGrade;
