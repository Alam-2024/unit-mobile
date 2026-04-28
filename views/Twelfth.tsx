import React from "react";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import flagFootballEighthNinth from "@/data/Flag/FlagEightAndNine";

export default function Twelfth() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the first grade
  const units: { [key: string]: IUnits } = {
    FitnessFun: SwimmingUnit1stGrade,
    TrackAndField: SwimmingUnit1stGrade,
    TargetGames: SwimmingUnit1stGrade,
    Swimming: SwimmingUnit1stGrade,
    Gymnastics: SwimmingUnit1stGrade,
    DancePlants: SwimmingUnit1stGrade,
    BatAndBall: SwimmingUnit1stGrade,
    InvasionGames: SwimmingUnit1stGrade,
    AttackingAndDefending: SwimmingUnit1stGrade,
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
