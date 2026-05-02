import React from "react";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomMiddleContainer from "@/components/views/CustomMiddleContainer";
import flagFootballEighthNinth from "@/data/Flag/FlagEightAndNine";

export default function EleventhGrade() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the eleventh grade
  const units: { [key: string]: IUnits } = {
    Swimming: SwimmingUnit1stGrade,
    "Flag Football 8–9": flagFootballEighthNinth,
  };
  return (
    <CustomMiddleContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="eleventh"
    />
  );
}
