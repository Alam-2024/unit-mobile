import React from "react";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomMiddleContainer from "@/components/views/CustomMiddleContainer";
import flagFootballEighthNinth from "@/data/Flag/FlagEightAndNine";

export default function EleventhGrade() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the eleventh grade
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
    <CustomMiddleContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
}
