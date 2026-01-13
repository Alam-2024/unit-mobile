import React from "react";
import CustomMiddleContainer from "@/components/views/CustomMiddleContainer";
import flagFootballSixthSeventh from "@/data/Flag/FlagSixthAndSeventh";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";

const SixthGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the first grade
  const units: { [key: string]: IUnits } = {
    CooperativeGames: SwimmingUnit1stGrade,
    TerritoryGames: SwimmingUnit1stGrade,
    Badminton: SwimmingUnit1stGrade,
    HealthAndFitness: SwimmingUnit1stGrade,
    Aquatics: SwimmingUnit1stGrade,
    StrikeAndField: SwimmingUnit1stGrade,
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
