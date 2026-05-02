import React from "react";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import flagFootballEighthNinth from "@/data/Flag/FlagEightAndNine";

export default function Twelfth() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the twelfth grade
  const units: { [key: string]: IUnits } = {
    Swimming: SwimmingUnit1stGrade,
    "Flag Football 8–9": flagFootballEighthNinth,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="twelfth"
    />
  );
}
