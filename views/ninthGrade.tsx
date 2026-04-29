import React from "react";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import flagFootballEighthNinth from "@/data/Flag/FlagEightAndNine";

export default function NinthGrade() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the first grade
  const units: { [key: string]: IUnits } = {
    CooperativeGames: SwimmingUnit1stGrade,
    TerritoryGames: SwimmingUnit1stGrade,
    Badminton: SwimmingUnit1stGrade,
    HealthAndFitness: SwimmingUnit1stGrade,
    Aquatics: SwimmingUnit1stGrade,
    StrikeAndField: SwimmingUnit1stGrade,
    Volleyball: SwimmingUnit1stGrade,
    Basketball: SwimmingUnit1stGrade,
    Swimming: SwimmingUnit1stGrade,
    FlagFootBall: flagFootballEighthNinth,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="ninth"
    />
  );
}
