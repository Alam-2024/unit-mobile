import React from "react";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";

const FirstGrade = () => {
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
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="first"
    />
  );
};

export default FirstGrade;
