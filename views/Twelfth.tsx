import React from "react";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import flagFootballEighthNinth from "@/data/Flag/FlagEightAndNine";

export default function Twelfth() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the first grade
  const units: { [key: string]: IUnits } = {
    InvasionGames: SwimmingUnit1stGrade,
    TargetGames: SwimmingUnit1stGrade,
    Gymnastics: SwimmingUnit1stGrade,
    TrackAndField: SwimmingUnit1stGrade,
    FitnessFun: SwimmingUnit1stGrade,
    AttackingAndDefending: SwimmingUnit1stGrade,
    Swimming: SwimmingUnit1stGrade,
    DancePlants: SwimmingUnit1stGrade,
    BatAndBall: SwimmingUnit1stGrade,
    FlagFootBall: flagFootballEighthNinth,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
}
